[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/next-log](../README.md) / InternalRequestLogEntry

# Type alias: InternalRequestLogEntry

> **InternalRequestLogEntry**: `WithId`\<`object`\>

The shape of an entry in the well-known "request log" collection.

## Type declaration

### createdAt

> **createdAt**: `UnixEpochMs`

### durationMs

> **durationMs**: `number`

### endpoint

> **endpoint**: `string` \| `null`

### header

> **header**: `string` \| `null`

### ip

> **ip**: `string` \| `null`

### method

> **method**: `string` \| `null`

### resStatusCode

> **resStatusCode**: `HttpStatusCode`

### route

> **route**: `string` \| `null`

## Source

[lib/next-log/index.ts:13](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-log/index.ts#L13)
