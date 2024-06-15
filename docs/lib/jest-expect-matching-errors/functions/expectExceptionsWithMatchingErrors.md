[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/jest-expect-matching-errors](../README.md) / expectExceptionsWithMatchingErrors

# Function: expectExceptionsWithMatchingErrors()

> **expectExceptionsWithMatchingErrors**\<`T`\>(`spec`, `errorFn`): `Promise`\<`void`\>

Maps each element of the `spec` array into a Jest expectation asserting that
`errorFn` either throws an error or rejects. If an assertion fails, a
helpful error message is thrown.

## Type parameters

• **T** *extends* [`unknown`, `string`][]

## Parameters

• **spec**: `T`

• **errorFn**

## Returns

`Promise`\<`void`\>

## Source

[lib/jest-expect-matching-errors/index.ts:15](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/jest-expect-matching-errors/index.ts#L15)
