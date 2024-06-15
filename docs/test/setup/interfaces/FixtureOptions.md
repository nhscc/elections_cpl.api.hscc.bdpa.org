[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [test/setup](../README.md) / FixtureOptions

# Interface: FixtureOptions

## Extends

- `Partial`\<[`WebpackTestFixtureOptions`](WebpackTestFixtureOptions.md)\>.`Partial`\<[`GitRepositoryFixtureOptions`](GitRepositoryFixtureOptions.md)\>.`Partial`\<[`DummyDirectoriesFixtureOptions`](DummyDirectoriesFixtureOptions.md)\>

## Properties

### directoryPaths?

> `optional` **directoryPaths**: `string`[]

#### Inherited from

`Partial.directoryPaths`

#### Source

[test/setup.ts:673](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L673)

***

### initialFileContents

> **initialFileContents**: `object`

#### Index signature

 \[`filePath`: `string`\]: `string`

#### Source

[test/setup.ts:658](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L658)

***

### performCleanup

> **performCleanup**: `boolean`

#### Source

[test/setup.ts:656](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L656)

***

### setupGit()?

> `optional` **setupGit**: (`git`) => `unknown`

#### Parameters

• **git**: `SimpleGit`

#### Returns

`unknown`

#### Inherited from

`Partial.setupGit`

#### Source

[test/setup.ts:668](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L668)

***

### use

> **use**: [`MockFixture`](MockFixture.md)\<[`FixtureContext`](FixtureContext.md)\<`object`\>\>[]

#### Source

[test/setup.ts:657](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L657)

***

### webpackVersion?

> `optional` **webpackVersion**: `string`

#### Inherited from

`Partial.webpackVersion`

#### Source

[test/setup.ts:663](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/test/setup.ts#L663)
