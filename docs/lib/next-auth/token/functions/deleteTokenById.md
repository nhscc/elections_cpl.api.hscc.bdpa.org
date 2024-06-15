[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / deleteTokenById

# Function: deleteTokenById()

> **deleteTokenById**(`__namedParameters`): `Promise`\<`number`\>

Deletes a full token entry by its `auth_id` from the well-known "auth"
MongoDB collection.

Deleted tokens remain in the system but in a deactivated state. They cannot
be reactivated or otherwise interacted with after they are
deleted/deactivated.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.auth\_id**: `undefined` \| `string` \| `ObjectId`

## Returns

`Promise`\<`number`\>

## Source

[lib/next-auth/token.ts:628](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L628)
