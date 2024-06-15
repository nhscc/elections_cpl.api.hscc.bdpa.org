[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [test/setup](../README.md) / wrapHandler

# Function: wrapHandler()

> **wrapHandler**(`pagesHandler`, `config`?): (`req`, `res`) => `Promise`\<`unknown`\>

This function wraps mock Next.js API handler functions so that they provide
the default (or a custom) API configuration object.

## Parameters

• **pagesHandler**: `NextApiHandler`

• **config?**: `PageConfig`

## Returns

`Function`

### Parameters

• **req**: `NextApiRequest`

• **res**: `NextApiResponse`

### Returns

`Promise`\<`unknown`\>

### config

> **config**: `PageConfig`

## Source

[test/setup.ts:61](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L61)
