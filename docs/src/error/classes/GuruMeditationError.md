[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [src/error](../README.md) / GuruMeditationError

# Class: GuruMeditationError

Represents a sanity check failure and/or the occurrence of an "impossible"
condition.

## Extends

- [`AppError`](AppError.md)

## Constructors

### new GuruMeditationError()

> **new GuruMeditationError**(`message`?): [`GuruMeditationError`](GuruMeditationError.md)

Represents a sanity check failure and/or the occurrence of an "impossible"
condition.

#### Parameters

• **message?**: `string`

#### Returns

[`GuruMeditationError`](GuruMeditationError.md)

#### Overrides

[`AppError`](AppError.md).[`constructor`](AppError.md#constructors)

#### Source

node\_modules/named-app-errors/dist/modules/error/guru-meditation.d.ts:11

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

[`AppError`](AppError.md).[`cause`](AppError.md#cause)

#### Source

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

[`AppError`](AppError.md).[`message`](AppError.md#message)

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`AppError`](AppError.md).[`name`](AppError.md#name)

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`AppError`](AppError.md).[`stack`](AppError.md#stack)

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### Inherited from

[`AppError`](AppError.md).[`prepareStackTrace`](AppError.md#preparestacktrace)

#### Source

node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`AppError`](AppError.md).[`stackTraceLimit`](AppError.md#stacktracelimit)

#### Source

node\_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

[`AppError`](AppError.md).[`captureStackTrace`](AppError.md#capturestacktrace)

#### Source

node\_modules/@types/node/globals.d.ts:21
