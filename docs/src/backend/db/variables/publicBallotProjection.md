[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [src/backend/db](../README.md) / publicBallotProjection

# Variable: publicBallotProjection

> `const` **publicBallotProjection**: `object`

A MongoDB cursor projection that transforms an internal ballot into a public
ballot.

## Type declaration

### \_id

> `readonly` **\_id**: `false` = `false`

### ranking

> `readonly` **ranking**: `true` = `true`

### voter\_id

> `readonly` **voter\_id**: `true` = `true`

## Source

[src/backend/db.ts:230](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/src/backend/db.ts#L230)
