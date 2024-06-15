[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-item](../README.md) / itemToStringId

# Function: itemToStringId()

## itemToStringId(item)

> **itemToStringId**\<`T`\>(`item`): `string`

Reduces an `item` down to the string representation of its `ObjectId`
instance.

### Type parameters

• **T** *extends* `ObjectId`

### Parameters

• **item**: [`IdItem`](../type-aliases/IdItem.md)\<`T`\>

### Returns

`string`

### Source

[lib/mongo-item/index.ts:236](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-item/index.ts#L236)

## itemToStringId(items)

> **itemToStringId**\<`T`\>(`items`): `string`[]

Reduces an array of `items` down to the string representations of their
respective `ObjectId` instances.

### Type parameters

• **T** *extends* `ObjectId`

### Parameters

• **items**: [`IdItemArray`](../type-aliases/IdItemArray.md)\<`T`\>

### Returns

`string`[]

### Source

[lib/mongo-item/index.ts:241](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-item/index.ts#L241)
