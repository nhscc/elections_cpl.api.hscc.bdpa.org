[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / getTokensByAttribute

# Function: getTokensByAttribute()

> **getTokensByAttribute**(`__namedParameters`): `Promise`\<[`PublicAuthEntry`](../../db/type-aliases/PublicAuthEntry.md)[]\>

Returns at most `resultsPerPage` (from [getConfig](../../constants/functions/getConfig.md)) full token entries
(`token`, `scheme`, and `attributes`) with matching attributes in the
well-known "auth" MongoDB collection.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.after\_id?**: `string` \| `ObjectId`

Only tokens with an `auth_id` after (less than) `after_id` will be returned.

• **\_\_namedParameters.filter**: [`LiteralUnknownUnion`](../../../../types/global/type-aliases/LiteralUnknownUnion.md)\<`Partial`\<`object`\>\>

The token attributes used to filter and return tokens.

## Returns

`Promise`\<[`PublicAuthEntry`](../../db/type-aliases/PublicAuthEntry.md)[]\>

## Source

[lib/next-auth/token.ts:508](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L508)
