[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / deleteTokensByAttribute

# Function: deleteTokensByAttribute()

> **deleteTokensByAttribute**(`__namedParameters`): `Promise`\<`number`\>

Deletes all full token entries with matching attributes in the well-known
"auth" MongoDB collection. Throws if an attempt is made to delete entries
with an empty filter.

Deleted tokens remain in the system but in a deactivated state. They cannot
be reactivated or otherwise interacted with after they are
deleted/deactivated.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.filter**: [`LiteralUnknownUnion`](../../../../types/global/type-aliases/LiteralUnknownUnion.md)\<`Partial`\<`object`\>\>

## Returns

`Promise`\<`number`\>

## Source

[lib/next-auth/token.ts:649](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L649)
