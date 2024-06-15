[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/next-api-respond](../README.md) / sendGenericHttpResponse

# Function: sendGenericHttpResponse()

> **sendGenericHttpResponse**(`res`, `statusCode`, `responseJson`?): `void`

Sends a generic HTTP response with the given `statusCode` and optional
`responseJson` body (defaults to `{}`). This is the "base" function called by
all other response functions.

## Parameters

• **res**: `NextApiResponse`

• **statusCode**: `HttpStatusCode`

• **responseJson?**: `Record`\<`string`, `unknown`\>

## Returns

`void`

## Source

[lib/next-api-respond/index.ts:9](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-api-respond/index.ts#L9)
