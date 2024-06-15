[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/authenticate](../README.md) / authenticateHeader

# Function: authenticateHeader()

> **authenticateHeader**(`__namedParameters`): `Promise`\<`object`\>

Authenticates a client via their Authorization header using the well-known
"auth" MongoDB collection. Does not throw on invalid/missing header string.

Despite the unfortunate name of the "Authorization" header, this function is
only used for authentication, not authorization.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.allowedSchemes?**: `"bearer"` \| `"bearer"`[]

Accepted authentication schemes. By default, all schemes are accepted.

• **\_\_namedParameters.header**: `undefined` \| `string`

Contents of the HTTP Authorization header.

## Returns

`Promise`\<`object`\>

### authenticated

> **authenticated**: `boolean`

### error?

> `optional` **error**: `string`

## Source

[lib/next-auth/authenticate.ts:26](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/authenticate.ts#L26)
