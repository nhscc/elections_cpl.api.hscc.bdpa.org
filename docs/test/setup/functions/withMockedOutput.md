[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [test/setup](../README.md) / withMockedOutput

# Function: withMockedOutput()

> **withMockedOutput**(`fn`, `options`?): `Promise`\<`void`\>

Any output generated within `fn` will be captured by an output spy instead of
emitting to the console (stdout/stderr).

However, not that `stdErrSpy` is set to passthrough mode by default. If
desired, use the `passthrough` option to prevent this.

## Parameters

• **fn**

• **options?**

• **options.passthrough?**

Determine if spies provide mock implementations for output functions,
thus preventing any output to the terminal, or if spies should
passthrough output as normal.

Passthrough is disabled for all spies by default (except `stdErrSpy`).
Pass `true` to enable passthrough for a specific spy.

• **options.passthrough.errorSpy?**: `boolean`

**Default**

```ts
false
```

• **options.passthrough.infoSpy?**: `boolean`

**Default**

```ts
false
```

• **options.passthrough.logSpy?**: `boolean`

**Default**

```ts
false
```

• **options.passthrough.stdErrSpy?**: `boolean`

**Default**

```ts
true
```

• **options.passthrough.stdoutSpy?**: `boolean`

**Default**

```ts
false
```

• **options.passthrough.warnSpy?**: `boolean`

**Default**

```ts
false
```

## Returns

`Promise`\<`void`\>

## Source

[test/setup.ts:452](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L452)
