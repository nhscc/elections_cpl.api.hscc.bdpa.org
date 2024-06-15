[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-schema](../README.md) / InternalMemory

# Type alias: InternalMemory

> **InternalMemory**: `object`

An internal cache of connection, server schema, and database state.

## Type declaration

### client

> **client**: `MongoClient` \| `null`

Memoized MongoDB driver client connection.

### databases

> **databases**: `Record`\<`string`, `Db`\>

Memoized MongoDB driver Database instances.

### schema

> **schema**: [`DbSchema`](DbSchema.md) \| `null`

Memoized resolved database schemas and aliases.

## Source

[lib/mongo-schema/index.ts:19](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-schema/index.ts#L19)
