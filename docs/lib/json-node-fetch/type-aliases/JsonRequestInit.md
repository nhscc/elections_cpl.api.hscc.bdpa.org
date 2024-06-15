[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/json-node-fetch](../README.md) / JsonRequestInit

# Type alias: JsonRequestInit

> **JsonRequestInit**: `Omit`\<`RequestInit`, `"body"`\> & `object`

Options to configure how jsonFetch executes.

## See

https://github.com/node-fetch/node-fetch#options

## Type declaration

### body?

> `optional` **body**: `BodyInit` \| `JsonObject` \| `JsonPrimitive`

The request body to send. Automatically stringified (via `JSON.stringify`)
if request content-type is `application/json`.

Note that this type is loose enough to accept JSON objects, but if you're
not using the `application/json` content-type when passing a JSON object as
the body then jsonFetch will reject with an error.

### rejectIfNonJsonContentType?

> `optional` **rejectIfNonJsonContentType**: `boolean`

If `true`, jsonFetch will reject when a response is missing the
`application/json` content-type header; if `false`, `json` will be
undefined and `error` will be an empty object.

#### Default

```ts
false
```

### rejectIfNotOk?

> `optional` **rejectIfNotOk**: `boolean`

If `true`, jsonFetch will reject when `response.ok` is not `true`; if
`false`, `json` will be undefined and `error` will be an empty object.

#### Default

```ts
false
```

#### See

https://developer.mozilla.org/en-US/docs/Web/API/Response/ok

## Source

[lib/json-node-fetch/index.ts:37](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/json-node-fetch/index.ts#L37)
