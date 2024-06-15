import checkVersion, { type Options } from 'multiverse/next-adhesive/check-version';
import { withMiddleware } from 'multiverse/next-api-glue';
import { testApiHandler } from 'next-test-api-route-handler';
import { mockEnvFactory, noopHandler, wrapHandler } from 'testverse/setup';

const withMockedEnv = mockEnvFactory({ NODE_ENV: 'test' });

it('is a noop by default', async () => {
  expect.hasAssertions();

  await testApiHandler({
    pagesHandler: wrapHandler(
      withMiddleware<Options>(noopHandler, {
        descriptor: '/fake',
        use: [checkVersion]
      })
    ),
    test: async ({ fetch }) => expect((await fetch()).status).toBe(200)
  });

  await testApiHandler({
    pagesHandler: wrapHandler(
      withMiddleware<Options>(noopHandler, {
        descriptor: '/fake',
        use: [checkVersion],
        options: { apiVersion: 'one' }
      })
    ),
    test: async ({ fetch }) => expect((await fetch()).status).toBe(200)
  });
});

it('sends 404 if its corresponding version is disabled', async () => {
  expect.hasAssertions();

  await testApiHandler({
    pagesHandler: wrapHandler(
      withMiddleware<Options>(noopHandler, {
        descriptor: '/fake',
        use: [checkVersion],
        options: { apiVersion: '1' }
      })
    ),
    test: async ({ fetch }) => {
      await withMockedEnv(
        async () => {
          expect((await fetch()).status).toBe(404);
        },
        { DISABLED_API_VERSIONS: '1' }
      );

      await withMockedEnv(
        async () => {
          expect((await fetch()).status).toBe(200);
        },
        { DISABLED_API_VERSIONS: '2' }
      );

      await withMockedEnv(
        async () => {
          expect((await fetch()).status).toBe(404);
        },
        { DISABLED_API_VERSIONS: '2,1' }
      );

      await withMockedEnv(
        async () => {
          expect((await fetch()).status).toBe(200);
        },
        { DISABLED_API_VERSIONS: '3,2' }
      );
    }
  });

  await withMockedEnv(
    async () => {
      await testApiHandler({
        pagesHandler: wrapHandler(
          withMiddleware<Options>(noopHandler, {
            descriptor: '/fake',
            use: [checkVersion],
            options: { apiVersion: '1' }
          })
        ),
        test: async ({ fetch }) => expect((await fetch()).status).toBe(200)
      });

      await testApiHandler({
        pagesHandler: wrapHandler(
          withMiddleware<Options>(noopHandler, {
            descriptor: '/fake',
            use: [checkVersion],
            options: { apiVersion: '2' }
          })
        ),
        test: async ({ fetch }) => expect((await fetch()).status).toBe(404)
      });

      await testApiHandler({
        pagesHandler: wrapHandler(
          withMiddleware<Options>(noopHandler, {
            descriptor: '/fake',
            use: [checkVersion],
            options: { apiVersion: 'three' }
          })
        ),
        test: async ({ fetch }) => expect((await fetch()).status).toBe(404)
      });

      await testApiHandler({
        pagesHandler: wrapHandler(
          withMiddleware<Options>(noopHandler, {
            descriptor: '/fake',
            use: [checkVersion],
            options: { apiVersion: '4' }
          })
        ),
        test: async ({ fetch }) => expect((await fetch()).status).toBe(404)
      });

      await testApiHandler({
        pagesHandler: wrapHandler(
          withMiddleware<Options>(async () => undefined, {
            descriptor: '/fake',
            use: [checkVersion],
            options: { apiVersion: '4' }
          })
        ),
        test: async ({ fetch }) => expect((await fetch()).status).toBe(404)
      });

      await testApiHandler({
        pagesHandler: wrapHandler(
          withMiddleware<Options>(noopHandler, {
            descriptor: '/fake',
            use: [checkVersion]
          })
        ),
        test: async ({ fetch }) => expect((await fetch()).status).toBe(200)
      });
    },
    { DISABLED_API_VERSIONS: 'three,4,2,five' }
  );
});

it('is a noop if DISABLED_API_VERSIONS is an empty string', async () => {
  expect.hasAssertions();

  await withMockedEnv(
    async () => {
      await testApiHandler({
        pagesHandler: wrapHandler(
          withMiddleware<Options>(noopHandler, {
            descriptor: '/fake',
            use: [checkVersion],
            options: { apiVersion: '4' }
          })
        ),
        test: async ({ fetch }) => expect((await fetch()).status).toBe(200)
      });

      await testApiHandler({
        pagesHandler: wrapHandler(
          withMiddleware<Options>(noopHandler, {
            descriptor: '/fake',
            use: [checkVersion]
          })
        ),
        test: async ({ fetch }) => expect((await fetch()).status).toBe(200)
      });
    },
    { DISABLED_API_VERSIONS: '' }
  );
});
