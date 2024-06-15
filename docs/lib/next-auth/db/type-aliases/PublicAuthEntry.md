[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/db](../README.md) / PublicAuthEntry

# Type alias: PublicAuthEntry

> **PublicAuthEntry**: `Pick`\<[`InternalAuthEntry`](InternalAuthEntry.md), `"attributes"` \| `"scheme"` \| `"token"`\> & `object`

The public base shape derived from an entry in the well-known "auth"
collection.

## Type declaration

### auth\_id

> **auth\_id**: `string`

A string representation of the ObjectId associated with this entry.

## Source

[lib/next-auth/db.ts:47](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/db.ts#L47)
