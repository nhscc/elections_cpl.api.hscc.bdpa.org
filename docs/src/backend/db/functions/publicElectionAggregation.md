[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [src/backend/db](../README.md) / publicElectionAggregation

# Function: publicElectionAggregation()

> **publicElectionAggregation**(`tokenAttributeOwner`): `Document`[]

Returns a MongoDB aggregation pipeline that transforms internal elections
into public elections, each including the `owned` property. Prepend a `$match` or
similar stage to return only a subset of elections.

## Parameters

• **tokenAttributeOwner**: `string`

## Returns

`Document`[]

## Source

[src/backend/db.ts:214](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/src/backend/db.ts#L214)
