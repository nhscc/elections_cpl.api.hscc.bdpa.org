[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-common](../README.md) / getCommonDummyData

# Function: getCommonDummyData()

> **getCommonDummyData**(`additionalDummyData`?): [`DummyData`](../../mongo-test/type-aliases/DummyData.md)

Returns data used to hydrate well-known databases and their well-known
collections.

Well-known databases and their well-known collections currently include:
  - `root` (collections: `auth`, `request-log`, `limited-log`)

## Parameters

• **additionalDummyData?**: [`DummyData`](../../mongo-test/type-aliases/DummyData.md)

## Returns

[`DummyData`](../../mongo-test/type-aliases/DummyData.md)

## Source

[lib/mongo-common/index.ts:88](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-common/index.ts#L88)
