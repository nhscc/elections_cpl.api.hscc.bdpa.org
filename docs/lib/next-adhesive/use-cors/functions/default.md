[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-adhesive/use-cors](../README.md) / default

# Function: default()

> **default**(`req`, `res`, `context`): `Promise`\<`void`\>

Allows _cross-origin_ requests for the most popular request types. **Note
that this can be dangerous (huge security hole) and should only be used for
public APIs**.

When present, this should be among the very first middleware in the chain and
certainly before _check-method_.

By default, allowed CORS methods are: `GET`, `HEAD`, `PUT`, `PATCH`, `POST`,
and `DELETE`.

## Parameters

• **req**: `NextApiRequest`

• **res**: `NextApiResponse`

• **context**: [`MiddlewareContext`](../../../next-api-glue/type-aliases/MiddlewareContext.md)\<[`Options`](../type-aliases/Options.md)\>

## Returns

`Promise`\<`void`\>

## Source

[lib/next-adhesive/use-cors.ts:25](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-adhesive/use-cors.ts#L25)
