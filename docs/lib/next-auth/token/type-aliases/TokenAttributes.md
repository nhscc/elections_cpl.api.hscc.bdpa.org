[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / TokenAttributes

# Type alias: TokenAttributes

> **TokenAttributes**: `object`

The shape of the attributes corresponding to a full token entry in the
well-known "auth" collection. Each property must correspond to an array
element in the [validTokenAttributes](../variables/validTokenAttributes.md) array and vice-versa.

## Type declaration

### isGlobalAdmin?

> `optional` **isGlobalAdmin**: `boolean`

If `true`, the token grants access to potentially dangerous abilities via
the well-known "/sys" API endpoint.

#### Default

```ts
undefined
```

### owner

> **owner**: `string`

A string (or stringified `ObjectId`) representing the owner of the token.

## Source

[lib/next-auth/token.ts:87](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L87)
