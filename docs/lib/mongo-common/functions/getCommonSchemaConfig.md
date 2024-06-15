[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-common](../README.md) / getCommonSchemaConfig

# Function: getCommonSchemaConfig()

> **getCommonSchemaConfig**(`additionalSchemaConfig`?): [`DbSchema`](../../mongo-schema/type-aliases/DbSchema.md)

A JSON representation of the backend Mongo database structure. This is used
for common consistent "well-known" db structure across projects.

Well-known databases and their well-known collections currently include:
  - `root` (collections: `auth`, `request-log`, `limited-log`)

## Parameters

• **additionalSchemaConfig?**: [`DbSchema`](../../mongo-schema/type-aliases/DbSchema.md)

## Returns

[`DbSchema`](../../mongo-schema/type-aliases/DbSchema.md)

## Source

[lib/mongo-common/index.ts:28](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-common/index.ts#L28)
