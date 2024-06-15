[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/db](../README.md) / getAuthDb

# Function: getAuthDb()

> **getAuthDb**(): `Promise`\<`Collection`\<[`InternalAuthEntry`](../type-aliases/InternalAuthEntry.md)\>\>

Return the well-known "auth" collection after calling [getDb](../../../mongo-schema/functions/getDb.md) on the
`'root'` database.

## Returns

`Promise`\<`Collection`\<[`InternalAuthEntry`](../type-aliases/InternalAuthEntry.md)\>\>

## Source

[lib/next-auth/db.ts:78](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/db.ts#L78)
