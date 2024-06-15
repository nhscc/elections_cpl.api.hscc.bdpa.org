[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [test/setup](../README.md) / protectedImport

# Function: protectedImport()

> **protectedImport**\<`T`\>(`__namedParameters`): `Promise`\<`T`\>

While `isolatedImport` performs a module import as if it were being
imported for the first time, `protectedImport` wraps `isolatedImport`
with `withMockedExit`. This makes `protectedImport` useful for testing
IIFE modules such as CLI entry points an externals.

## Type parameters

• **T** = `unknown`

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.expectedExitCode?**: `number` \| `"non-zero"`

The code that must be passed to process.exit by the imported module. If
`undefined` (default), then process.exit must not be called.

**Default**

```ts
undefined
```

• **\_\_namedParameters.path**: `string`

Path to the module to import. Module resolution is handled by `require`.

• **\_\_namedParameters.useDefault?**: `boolean`

By default, only if `module.__esModule === true`, the default export will
be returned instead. Use `useDefault` to override this behavior in either
direction.

## Returns

`Promise`\<`T`\>

## Source

[test/setup.ts:314](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L314)
