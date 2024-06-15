[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/next-limit](../README.md) / removeRateLimit

# Function: removeRateLimit()

> **removeRateLimit**(`__namedParameters`): `Promise`\<`number`\>

Removes a rate limit on a client matched against either `ip`, `header`, or
both. Matching against both removes rate limits that match either criterion.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.target**: `undefined` \| `object`

## Returns

`Promise`\<`number`\>

The number of rate limits removed.

## Source

[lib/next-limit/index.ts:69](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-limit/index.ts#L69)
