[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-adhesive/auth-request](../README.md) / default

# Function: default()

> **default**(`req`, `res`, `context`): `Promise`\<`void`\>

Rejects unauthenticatable and unauthorizable requests (via Authorization
header).

## Parameters

• **req**: `NextApiRequest`

• **res**: `NextApiResponse`

• **context**: [`MiddlewareContext`](../../../next-api-glue/type-aliases/MiddlewareContext.md)\<[`Options`](../type-aliases/Options.md)\>

## Returns

`Promise`\<`void`\>

## Source

[lib/next-adhesive/auth-request.ts:47](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-adhesive/auth-request.ts#L47)
