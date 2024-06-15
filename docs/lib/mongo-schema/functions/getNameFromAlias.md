[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-schema](../README.md) / getNameFromAlias

# Function: getNameFromAlias()

> **getNameFromAlias**(`alias`): `Promise`\<`string`\>

Accepts a database alias (or real name) and returns its real name. If the
actual database is not listed in the schema, an error is thrown.

## Parameters

• **alias**: `string`

## Returns

`Promise`\<`string`\>

## Source

[lib/mongo-schema/index.ts:162](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-schema/index.ts#L162)
