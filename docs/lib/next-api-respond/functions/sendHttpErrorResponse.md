[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/next-api-respond](../README.md) / sendHttpErrorResponse

# Function: sendHttpErrorResponse()

> **sendHttpErrorResponse**(`res`, `statusCode`, `responseJson`): `JsonError`

Sends a generic "error" response and `responseJson` body, optionally with
additional properties. This function is called by all non-2xx response
functions.

## Parameters

• **res**: `NextApiResponse`

• **statusCode**: `HttpStatusCode`

• **responseJson**: `Record`\<`string`, `unknown`\> & `object`

## Returns

`JsonError`

## Source

[lib/next-api-respond/index.ts:39](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-api-respond/index.ts#L39)
