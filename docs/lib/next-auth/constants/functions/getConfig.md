[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/constants](../README.md) / getConfig

# Function: getConfig()

> **getConfig**(): `object`

## Returns

`object`

### resultsPerPage

> **resultsPerPage**: `number` = `100`

Used as the MongoDb query resultset limit. The API will never return
more JSON objects than this number.

If this number is not positive, behavior is undefined.

## Source

[lib/next-auth/constants.ts:2](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/constants.ts#L2)
