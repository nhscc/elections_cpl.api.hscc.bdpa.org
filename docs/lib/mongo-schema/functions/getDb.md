[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-schema](../README.md) / getDb

# Function: getDb()

> **getDb**(`__namedParameters`): `Promise`\<`Db`\>

Lazily connects to a database on-demand, memoizing the result. If the
database does not yet exist, it is both created and initialized by this
function. The latter can be prevented by setting `initialize` to `false`.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.initialize?**: `boolean`

Set to `false` to prevent `getDb` from calling `initializeDb` if the
database does not exist prior to acquiring it.

**Default**

```ts
true
```

• **\_\_namedParameters.name**: `string`

The name or alias of the database to retrieve.

## Returns

`Promise`\<`Db`\>

## Source

[lib/mongo-schema/index.ts:218](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-schema/index.ts#L218)
