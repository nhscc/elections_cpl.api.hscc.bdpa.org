[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/db](../README.md) / publicAuthEntryProjection

# Variable: publicAuthEntryProjection

> `const` **publicAuthEntryProjection**: `object`

A MongoDB cursor projection that transforms an internal auth entry (or
"token") into a public auth entry.

## Type declaration

### \_id

> **\_id**: `boolean` = `false`

### attributes

> **attributes**: `boolean` = `true`

### auth\_id

> **auth\_id**: `object`

### auth\_id.$toString

> **$toString**: `string` = `'$_id'`

### scheme

> **scheme**: `boolean` = `true`

### token

> **token**: `boolean` = `true`

## Source

[lib/next-auth/db.ts:66](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/db.ts#L66)
