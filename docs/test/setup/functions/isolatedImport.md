[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [test/setup](../README.md) / isolatedImport

# Function: isolatedImport()

> **isolatedImport**\<`T`\>(`__namedParameters`): `T`

Performs a module import as if it were being imported for the first time.

Note that this function breaks the "require caching" expectation of Node.js
modules. Problems can arise, for example, when closing an app-wide database
connection in your test cleanup phase and expecting it to close for the
isolated module too. In this case, the isolated module has its own isolated
"app-wide" connection that would not actually be closed and could cause your
test to hang unexpectedly, even when all tests pass.

## Type parameters

• **T** = `unknown`

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.path**: `string`

Path to the module to import. Module resolution is handled by `require`.

• **\_\_namedParameters.useDefault?**: `boolean`

By default, only if `module.__esModule === true`, the default export will
be returned instead. Use `useDefault` to override this behavior in either
direction.

## Returns

`T`

## Source

[test/setup.ts:251](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L251)
