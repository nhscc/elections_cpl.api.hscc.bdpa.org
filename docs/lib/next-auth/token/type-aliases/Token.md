[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/token](../README.md) / Token

# Type alias: Token

> **Token**: `object`

The shape of the actual token and scheme data contained within an entry in
the well-known "auth" collection.

## Type declaration

### scheme

> **scheme**: [`AuthenticationScheme`](../../authenticate/type-aliases/AuthenticationScheme.md)

The authentication scheme this token supports.

### token

> **token**: `JsonObject`

The actual token.

## Source

[lib/next-auth/token.ts:42](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/token.ts#L42)
