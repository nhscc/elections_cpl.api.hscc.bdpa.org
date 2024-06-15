[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / updateTokenAttributesById

# Function: updateTokenAttributesById()

> **updateTokenAttributesById**(`__namedParameters`): `Promise`\<`number`\>

Updates a token's attributes by matching the provided data against the
well-known "auth" MongoDB collection. Throws on invalid/missing target or
entry data.

**Note that the new `attributes` object will _patch_, not replace, the old
object.**

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.auth\_id**: `undefined` \| `string` \| `ObjectId`

The ObjectId of the token in the well-known "auth" MongoDb
collection. Throws if `auth_id` cannot be coerced into an ObjectId.

• **\_\_namedParameters.update**: [`LiteralUnknownUnion`](../../../../types/global/type-aliases/LiteralUnknownUnion.md)\<[`TokenAttributes`](../type-aliases/TokenAttributes.md)\>

The object used to patch the token's attributes.

## Returns

`Promise`\<`number`\>

## Source

[lib/next-auth/token.ts:553](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L553)
