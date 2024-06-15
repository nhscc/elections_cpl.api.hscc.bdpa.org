[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-item](../README.md) / ItemToObjectIdOptions

# Type alias: ItemToObjectIdOptions

> **ItemToObjectIdOptions**: `object`

## Type declaration

### ignoreInvalidId?

> `optional` **ignoreInvalidId**: `boolean`

If `true`, inputs that cannot be coerced into an ObjectId will be
replaced with `null` instead of throwing a [ValidationError](../../../src/error/classes/ValidationError.md).

#### Default

```ts
false
```

## Source

[lib/mongo-item/index.ts:127](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-item/index.ts#L127)
