[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-adhesive/add-raw-body](../README.md) / ensureNextApiRequestHasRawBody

# Function: ensureNextApiRequestHasRawBody()

> **ensureNextApiRequestHasRawBody**(`req`): `req is WithRawBody<NextApiRequest>`

Type guard function similar to the `isNextApiRequestWithRawBody` type
predicate except an error is thrown if the request object cannot satisfy the
`WithRawBody` type constraint.

## Parameters

• **req**: `NextApiRequest`

## Returns

`req is WithRawBody<NextApiRequest>`

## Source

[lib/next-adhesive/add-raw-body.ts:65](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-adhesive/add-raw-body.ts#L65)
