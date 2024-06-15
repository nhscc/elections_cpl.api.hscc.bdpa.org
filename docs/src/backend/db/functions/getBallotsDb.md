[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [src/backend/db](../README.md) / getBallotsDb

# Function: getBallotsDb()

> **getBallotsDb**(): `Promise`\<`Collection`\<[`InternalBallot`](../type-aliases/InternalBallot.md)\>\>

Return the well-known "ballots" collection after calling [getDb](../../../../lib/mongo-schema/functions/getDb.md) on the
`'app'` database.

## Returns

`Promise`\<`Collection`\<[`InternalBallot`](../type-aliases/InternalBallot.md)\>\>

## Source

[src/backend/db.ts:57](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/src/backend/db.ts#L57)
