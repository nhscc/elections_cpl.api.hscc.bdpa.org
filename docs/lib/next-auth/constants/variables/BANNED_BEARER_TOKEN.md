[**elections-cpl.api.hscc.bdpa.org**](../../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../../README.md) / [lib/next-auth/constants](../README.md) / BANNED\_BEARER\_TOKEN

# Variable: BANNED\_BEARER\_TOKEN

> `const` **BANNED\_BEARER\_TOKEN**: `"banned-h54e-6rt7-gctfh-hrftdygct0"` = `'banned-h54e-6rt7-gctfh-hrftdygct0'`

This string is guaranteed to be rate limited when running in a test
environment (i.e. `NODE_ENV=test`). This string cannot be used for
authenticated HTTP access to the API in production.

## Source

[lib/next-auth/constants.ts:36](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-auth/constants.ts#L36)
