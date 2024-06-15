[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-schema](../README.md) / initializeDb

# Function: initializeDb()

> **initializeDb**(`__namedParameters`): `Promise`\<`void`\>

Creates a database and initializes its collections. If the database does not
exist before calling this function, it will be created first. This function
should only be called on empty or brand new databases **and not on databases
with pre-existing collections.**

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.name**: `string`

The name or alias of the database to initialize.

## Returns

`Promise`\<`void`\>

## Source

[lib/mongo-schema/index.ts:283](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-schema/index.ts#L283)
