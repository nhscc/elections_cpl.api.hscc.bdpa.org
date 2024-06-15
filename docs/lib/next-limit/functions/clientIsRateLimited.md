[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/next-limit](../README.md) / clientIsRateLimited

# Function: clientIsRateLimited()

> **clientIsRateLimited**(`req`): `Promise`\<`object`\>

Returns an object with two keys: `isLimited` and `retryAfter`. If `isLimited`
is true, then the request should be rejected. The client should be instructed
to retry their request after `retryAfter` milliseconds have passed.

## Parameters

• **req**: `NextApiRequest`

## Returns

`Promise`\<`object`\>

### isLimited

> **isLimited**: `boolean` = `!!limited`

### retryAfter

> **retryAfter**: `number`

## Source

[lib/next-limit/index.ts:36](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-limit/index.ts#L36)
