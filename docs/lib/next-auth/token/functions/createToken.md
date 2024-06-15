[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / createToken

# Function: createToken()

> **createToken**(`__namedParameters`): `Promise`\<[`PublicAuthEntry`](../../db/type-aliases/PublicAuthEntry.md)\>

Generates a new full token entry in the well-known "auth" MongoDB collection,
including the provided attribute and scheme metadata. Throws on invalid entry
data.

The current version of this function uses the `bearer` scheme to create v4
UUID "bearer tokens". This _implementation detail_ may change at any time.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.data**: [`LiteralUnknownUnion`](../../../../types/global/type-aliases/LiteralUnknownUnion.md)\<[`NewAuthEntry`](../../db/type-aliases/NewAuthEntry.md)\>

Data used to generate a new "auth" entry.

## Returns

`Promise`\<[`PublicAuthEntry`](../../db/type-aliases/PublicAuthEntry.md)\>

## Source

[lib/next-auth/token.ts:397](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L397)
