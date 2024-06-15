[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / isAllowedScheme

# Function: isAllowedScheme()

> **isAllowedScheme**(`obj`, `onlyAllowSubset`?): `obj is "bearer"`

Type guard that returns `true` if `obj` satisfies the
[AuthenticationScheme](../../authenticate/type-aliases/AuthenticationScheme.md) interface. Additional constraints may be
enforced such that `obj` is among a _subset_ of allowable schemes via the
`onlyAllowSubset` parameter.

## Parameters

• **obj**: `unknown`

• **onlyAllowSubset?**: `"bearer"` \| `"bearer"`[]

## Returns

`obj is "bearer"`

## Source

[lib/next-auth/token.ts:173](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L173)
