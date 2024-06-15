[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / getTokenByDerivation

# Function: getTokenByDerivation()

> **getTokenByDerivation**(`__namedParameters`): `Promise`\<[`PublicAuthEntry`](../../db/type-aliases/PublicAuthEntry.md)\>

Returns the full token entry (`token`, `scheme`, and `attributes`) in the
well-known "auth" MongoDB collection that matches the given token and scheme
provided via `from`.

Throws [InvalidSecretError](../../../../src/error/classes/InvalidSecretError.md) if invalid/missing data is provided.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.allowedSchemes?**: `"bearer"` \| `"bearer"`[]

Accepted authentication schemes. By default, all schemes are accepted.

• **\_\_namedParameters.from**: `undefined` \| `string` \| [`Token`](../type-aliases/Token.md)

If `from` is an object, it will be passed as `authData` to
[deriveSchemeAndToken](deriveSchemeAndToken.md). Otherwise, if `from` is a string, it will be
passed as `authString` to [deriveSchemeAndToken](deriveSchemeAndToken.md).

## Returns

`Promise`\<[`PublicAuthEntry`](../../db/type-aliases/PublicAuthEntry.md)\>

## Source

[lib/next-auth/token.ts:468](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L468)
