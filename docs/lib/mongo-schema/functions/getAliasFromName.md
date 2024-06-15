[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-schema](../README.md) / getAliasFromName

# Function: getAliasFromName()

> **getAliasFromName**(`nameActual`): `Promise`\<`string`[]\>

Accepts a database name (or an alias) and returns one or more aliases. If the
named database has no aliases listed in the schema, said database name is
returned as a single-element array. If said database name is not listed in
the schema, an error is thrown.

## Parameters

• **nameActual**: `string`

## Returns

`Promise`\<`string`[]\>

## Source

[lib/mongo-schema/index.ts:185](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-schema/index.ts#L185)
