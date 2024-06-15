[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/mongo-test](../README.md) / setupMemoryServerOverride

# Function: setupMemoryServerOverride()

> **setupMemoryServerOverride**(`params`?): `object`

Setup per-test versions of the mongodb client and database connections using
jest lifecycle hooks.

## Parameters

• **params?**

• **params.defer?**: `boolean`

If `true`, `beforeEach` and `afterEach` lifecycle hooks are skipped and the
database is initialized and hydrated once before all tests are run. **In
this mode, all tests will share the same database state!**

**Default**

```ts
false
```

## Returns

`object`

### reinitializeServer()

> **reinitializeServer**: () => `Promise`\<`void`\>

Reset the dummy MongoDb server databases back to their initial states.

#### Returns

`Promise`\<`void`\>

## Source

[lib/mongo-test/index.ts:154](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/mongo-test/index.ts#L154)
