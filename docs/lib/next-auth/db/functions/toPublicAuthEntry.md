[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/db](../README.md) / toPublicAuthEntry

# Function: toPublicAuthEntry()

> **toPublicAuthEntry**(`entry`): [`PublicAuthEntry`](../type-aliases/PublicAuthEntry.md)

Transform an internal entry from the well-known "auth" MongoDB collection
into one that is safe for consumption.

## Parameters

• **entry**: [`InternalAuthEntry`](../type-aliases/InternalAuthEntry.md)

## Returns

[`PublicAuthEntry`](../type-aliases/PublicAuthEntry.md)

## Source

[lib/next-auth/db.ts:86](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/db.ts#L86)
