[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-test](../README.md) / TestCustomizations

# Type alias: TestCustomizations

> **TestCustomizations**: `object`

For use when mocking the contents of files containing `getDummyData` and/or
`getSchemaConfig`.

## Type declaration

### getDummyData()

> **getDummyData**: () => `Promise`\<[`DummyData`](DummyData.md)\>

#### Returns

`Promise`\<[`DummyData`](DummyData.md)\>

### getSchemaConfig()

> **getSchemaConfig**: () => `Promise`\<[`DbSchema`](../../mongo-schema/type-aliases/DbSchema.md)\>

#### Returns

`Promise`\<[`DbSchema`](../../mongo-schema/type-aliases/DbSchema.md)\>

## Source

[lib/mongo-test/index.ts:55](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-test/index.ts#L55)
