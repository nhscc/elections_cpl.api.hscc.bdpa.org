[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / updateTokensAttributesByAttribute

# Function: updateTokensAttributesByAttribute()

> **updateTokensAttributesByAttribute**(`__namedParameters`): `Promise`\<`number`\>

Updates all tokens with matching attributes in the well-known "auth" MongoDB
collection.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.filter**: [`LiteralUnknownUnion`](../../../../types/global/type-aliases/LiteralUnknownUnion.md)\<`Partial`\<`object`\>\>

The token attributes used to filter and update tokens.

• **\_\_namedParameters.update**: [`LiteralUnknownUnion`](../../../../types/global/type-aliases/LiteralUnknownUnion.md)\<[`TokenAttributes`](../type-aliases/TokenAttributes.md)\>

The object used to patch the tokens' attributes.

## Returns

`Promise`\<`number`\>

## Source

[lib/next-auth/token.ts:585](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L585)
