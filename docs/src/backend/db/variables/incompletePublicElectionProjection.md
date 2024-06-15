[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [src/backend/db](../README.md) / incompletePublicElectionProjection

# Variable: incompletePublicElectionProjection

> `const` **incompletePublicElectionProjection**: `object`

A MongoDB cursor projection that transforms an internal election into a public
election.

## Type declaration

### \_id

> `readonly` **\_id**: `false` = `false`

### closesAt

> `readonly` **closesAt**: `true` = `true`

### createdAt

> `readonly` **createdAt**: `true` = `true`

### deleted

> `readonly` **deleted**: `true` = `true`

### description

> `readonly` **description**: `true` = `true`

### election\_id

> `readonly` **election\_id**: `object`

### election\_id.$toString

> `readonly` **$toString**: `"$_id"` = `'$_id'`

### opensAt

> `readonly` **opensAt**: `true` = `true`

### options

> `readonly` **options**: `true` = `true`

### title

> `readonly` **title**: `true` = `true`

## Source

[src/backend/db.ts:197](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/src/backend/db.ts#L197)
