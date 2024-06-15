[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/json-node-fetch](../README.md) / globalJsonRequestOptions

# Variable: globalJsonRequestOptions

> `const` **globalJsonRequestOptions**: [`JsonRequestInit`](../type-aliases/JsonRequestInit.md)

The mutable default options for all `jsonFetch` calls. Keys will be
overridden by the optional `options` object passed into each call, e.g.
`jsonFetch(url, options)`.

Note: you must use `credentials: 'include'` to include cookies with your
requests. This is not the default setting.

**WARN: this setting MUST only be used in "end-developer" source, not in
libraries or anything that is meant to be imported into higher-order code or
you run the risk of terrible conflicts!**

## See

https://github.com/node-fetch/node-fetch#options

## Source

[lib/json-node-fetch/index.ts:79](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/json-node-fetch/index.ts#L79)
