[**elections-cpl.api.hscc.bdpa.org**](../../../README.md) • **Docs**

***

[elections-cpl.api.hscc.bdpa.org](../../../README.md) / [lib/next-log](../README.md) / addToRequestLog

# Function: addToRequestLog()

> **addToRequestLog**(`__namedParameters`): `Promise`\<`void`\>

This function adds a request metadata entry to the database.

Note that this async function **does not have to be awaited**. It's fire and
forget!

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.durationMs**: `number`

• **\_\_namedParameters.endpoint**: `undefined` \| `null` \| `string`

• **\_\_namedParameters.req**: `NextApiRequest`

• **\_\_namedParameters.res**: `NextApiResponse`

## Returns

`Promise`\<`void`\>

## Example

```
doSomeStuff();
void addToRequestLog({ req, res, endpoint });
doSomeOtherStuff();
```

## Source

[lib/next-log/index.ts:42](https://github.com/nhscc/elections_cpl.api.hscc.bdpa.org/blob/46ed5b306a3fd199be2bd28706c3da03542c6da3/lib/next-log/index.ts#L42)
