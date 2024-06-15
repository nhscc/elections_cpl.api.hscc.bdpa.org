[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / getTokenById

# Function: getTokenById()

> **getTokenById**(`__namedParameters`): `Promise`\<[`PublicAuthEntry`](../../db/type-aliases/PublicAuthEntry.md)\>

Returns the full token entry (`token`, `scheme`, and `attributes`)
corresponding to the given `_id` (`auth_id`) in the well-known "auth" MongoDB
collection.

Throws if invalid/missing data is provided.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.auth\_id**: `undefined` \| `string` \| `ObjectId`

The ObjectId of the token in the well-known "auth" MongoDb
collection. Throws if `auth_id` cannot be coerced into an ObjectId.

## Returns

`Promise`\<[`PublicAuthEntry`](../../db/type-aliases/PublicAuthEntry.md)\>

## Source

[lib/next-auth/token.ts:438](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L438)
