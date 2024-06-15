[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/jest-mongo-object-id-pseudo-sort](../README.md) / objectIdPseudoSortPredicate

# Function: objectIdPseudoSortPredicate()

> **objectIdPseudoSortPredicate**(`order`): (`a`, `b`) => `number`

A sort predicate meant to be used with Array.prototype.sort when
ordering items by their `ObjectId`. In the majority of cases, the result
should be the same as what MongoDb would return with `{ sort: { _id: 1 }}`).

## Parameters

• **order**: `"ascending"` \| `"descending"`

## Returns

`Function`

### Parameters

• **a**: `WithId`\<`unknown`\>

• **b**: `WithId`\<`unknown`\>

### Returns

`number`

## Source

[lib/jest-mongo-object-id-pseudo-sort/index.ts:8](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/jest-mongo-object-id-pseudo-sort/index.ts#L8)
