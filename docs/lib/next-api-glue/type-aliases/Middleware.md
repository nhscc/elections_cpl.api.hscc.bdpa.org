[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/next-api-glue](../README.md) / Middleware

# Type alias: Middleware()\<Options\>

> **Middleware**\<`Options`\>: (`req`, `res`, `context`) => `unknown`

The shape of a custom middleware function.

## Type parameters

• **Options** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

## Parameters

• **req**: `NextApiRequest`

• **res**: `NextApiResponse`

• **context**: [`MiddlewareContext`](MiddlewareContext.md)\<`Options`\>

## Returns

`unknown`

## Source

[lib/next-api-glue/index.ts:14](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-api-glue/index.ts#L14)
