[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/next-api-respond](../README.md) / sendHttpSuccessResponse

# Function: sendHttpSuccessResponse()

> **sendHttpSuccessResponse**(`res`, `statusCode`, `responseJson`?): `JsonSuccess`

Sends a generic "success" response and `responseJson` body, optionally with
additional properties. This function is called by all 2xx response functions.

## Parameters

• **res**: `NextApiResponse`

• **statusCode**: `HttpStatusCode`

• **responseJson?**: `Record`\<`string`, `unknown`\>

## Returns

`JsonSuccess`

## Source

[lib/next-api-respond/index.ts:24](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-api-respond/index.ts#L24)
