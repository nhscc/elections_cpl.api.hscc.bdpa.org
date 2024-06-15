[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/constants](../README.md) / DUMMY\_BEARER\_TOKEN

# Variable: DUMMY\_BEARER\_TOKEN

> `const` **DUMMY\_BEARER\_TOKEN**: `"12349b61-83a7-4036-b060-213784b491"` = `'12349b61-83a7-4036-b060-213784b491'`

This string allows authenticated API access only when running in a test
environment (i.e. `NODE_ENV=test`). This string cannot be used for
authenticated HTTP access to the API in production.

## Source

[lib/next-auth/constants.ts:29](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/constants.ts#L29)
