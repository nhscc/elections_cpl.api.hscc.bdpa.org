[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / TokenAttributesFilter

# Type alias: TokenAttributesFilter

> **TokenAttributesFilter**: `Partial`\<`object`\>

The shape of a filter used to search through the well-known "auth"
collection.

## Type declaration

### isGlobalAdmin

> **isGlobalAdmin**: `boolean`

The target global administrator status of the target token(s).

### owner

> **owner**: `string` \| `string`[]

As a string, this represents the target _owner_ of the target token. As an
array, this represents the target _owners_ of the target tokens, any of
which could be returned.

## Source

[lib/next-auth/token.ts:105](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L105)
