[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-schema](../README.md) / destroyDb

# Function: destroyDb()

> **destroyDb**(`__namedParameters`): `Promise`\<`boolean`\>

Drops a database, destroying its collections. If the database does not exist
before calling this function, it will be created first then dropped.

Note that this function does not clear the destroyed database's Db instance
from internal memory for performance reasons.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.name**: `string`

The name or alias of the database to destroy.

## Returns

`Promise`\<`boolean`\>

## Source

[lib/mongo-schema/index.ts:264](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-schema/index.ts#L264)
