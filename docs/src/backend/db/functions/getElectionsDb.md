[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [src/backend/db](../README.md) / getElectionsDb

# Function: getElectionsDb()

> **getElectionsDb**(): `Promise`\<`Collection`\<[`InternalElection`](../type-aliases/InternalElection.md)\>\>

Return the well-known "elections" collection after calling [getDb](../../../../lib/mongo-schema/functions/getDb.md) on the
`'app'` database.

## Returns

`Promise`\<`Collection`\<[`InternalElection`](../type-aliases/InternalElection.md)\>\>

## Source

[src/backend/db.ts:49](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/src/backend/db.ts#L49)
