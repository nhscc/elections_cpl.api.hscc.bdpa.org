[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [src/backend/db](../README.md) / getSchemaConfig

# Function: getSchemaConfig()

> **getSchemaConfig**(): [`DbSchema`](../../../../lib/mongo-schema/type-aliases/DbSchema.md)

A JSON representation of the backend Mongo database structure. This is used
for consistent app-wide db access across projects and to generate transient
versions of the db during testing.

## Returns

[`DbSchema`](../../../../lib/mongo-schema/type-aliases/DbSchema.md)

## Source

[src/backend/db.ts:13](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/src/backend/db.ts#L13)
