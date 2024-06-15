[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-schema](../README.md) / DbSchema

# Type alias: DbSchema

> **DbSchema**: `object`

A configuration object representing one or more MongoDB databases and their
aliases.

## Type declaration

### aliases

> **aliases**: `Record`\<`string`, `string`\>

These are alternative names to use with `getDb` that map to the names of
databases known to this system. Aliases are specified as `alias:
real-name`.

### databases

> **databases**: `Record`\<`string`, `object`\>

All databases known to this system. These can be accessed via `getDb`.

## Source

[lib/mongo-schema/index.ts:61](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-schema/index.ts#L61)
