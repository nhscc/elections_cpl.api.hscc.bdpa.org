[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/json-unfetch](../README.md) / globalJsonRequestOptions

# Variable: globalJsonRequestOptions

> `const` **globalJsonRequestOptions**: [`JsonRequestInit`](../type-aliases/JsonRequestInit.md)

The mutable default options for all `jsonFetch` calls. Keys will be
overridden by the optional `options` object passed into each call, e.g.
`jsonFetch(url, options)`.

Note: you must use `credentials: 'include'` to include cookies with your
requests. This is not the default setting.

## See

https://github.com/developit/unfetch#api

## Source

[lib/json-unfetch/index.ts:82](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/json-unfetch/index.ts#L82)
