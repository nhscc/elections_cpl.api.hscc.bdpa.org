[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [test/setup](../README.md) / mockFixtureFactory

# Function: mockFixtureFactory()

> **mockFixtureFactory**\<`CustomOptions`, `CustomContext`\>(`testIdentifier`, `options`?): (`fn`) => `Promise`\<`void`\>

## Type parameters

• **CustomOptions** *extends* `Record`\<`string`, `unknown`\> = `object`

• **CustomContext** *extends* `Record`\<`string`, `unknown`\> = `object`

## Parameters

• **testIdentifier**: `string`

• **options?**: `Partial`\<[`FixtureOptions`](../interfaces/FixtureOptions.md) & `CustomOptions`\>

## Returns

`Function`

### Parameters

• **fn**: [`FixtureAction`](../type-aliases/FixtureAction.md)\<[`FixtureContext`](../interfaces/FixtureContext.md)\<[`FixtureOptions`](../interfaces/FixtureOptions.md) & `Partial`\<`Record`\<`string`, `unknown`\> & `CustomOptions`\>\> & `CustomContext`\>

### Returns

`Promise`\<`void`\>

## Source

[test/setup.ts:1096](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L1096)
