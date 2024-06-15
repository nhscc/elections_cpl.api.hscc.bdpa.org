[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/next-api-respond](../README.md) / sendHttpRateLimited

# Function: sendHttpRateLimited()

> **sendHttpRateLimited**(`res`, `responseJson`?): `void`

Sends an HTTP 429 "too many requests" response with optional `responseJson`
data.

## Parameters

• **res**: `NextApiResponse`

• **responseJson?**: `Record`\<`string`, `unknown`\>

## Returns

`void`

## Source

[lib/next-api-respond/index.ts:157](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-api-respond/index.ts#L157)
