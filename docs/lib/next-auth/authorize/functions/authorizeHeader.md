[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/authorize](../README.md) / authorizeHeader

# Function: authorizeHeader()

> **authorizeHeader**(`__namedParameters`): `Promise`\<`object`\>

Authorizes a client via their Authorization header using the well-known
"auth" MongoDB collection. Does not throw on invalid/missing header string.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.constraints?**: `"isGlobalAdmin"` \| `"isGlobalAdmin"`[]

Constraints a client must satisfy to be considered authorized.

• **\_\_namedParameters.header**: `undefined` \| `string`

Contents of the HTTP Authorization header.

## Returns

`Promise`\<`object`\>

### authorized

> **authorized**: `boolean`

### error?

> `optional` **error**: `string`

## Source

[lib/next-auth/authorize.ts:30](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/authorize.ts#L30)
