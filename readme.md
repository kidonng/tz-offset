# tz-offset

> Get and set offset by time zone name

## Install

```sh
npm install @kidonng/tz-offset
```

## Usage

```js
import {tzOffset, withTz} from '@kidonng/tz-offset'

tzOffset('Asia/Shanghai') // => 480
tzOffset('UTC') // => 0

withTz('Asia/Shanghai', Date.UTC(2000, 0)) // => 2000-01-01T08:00:00.000Z
```

## API

### `tzOffset`

```ts
declare const tzOffset: (timeZone: string) => number
```

Returns number of minutes between the given time zone and UTC.

The value is positive if the given time zone is ahead of UTC, and negative if the given time zone is behind UTC. This is **contrary** to [`Date#getTimezoneOffset()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#negative_values_and_positive_values), which compares _local_ time zone to UTC.

### `withTz`

<!-- prettier-ignore -->
```ts
declare const withTz: (timeZone: string, date: number | string | Date) => Date
```

Converts the given date to specified timezone.

## Recipes

This module pairs nicely with [`date-fns`](https://github.com/date-fns/date-fns).

### Specify a UTC offset

```js
tzOffset('Etc/GMT+8') // => -480
```

Note [the sign is intentionally inverted](https://en.wikipedia.org/wiki/Tz_database#Area).

## Compatibility

This modules uses `Intl.DateTimeFormat`'s [`hourCycle`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#hourcycle), which is supported since:

- Chrome 73
- Edge 18
- Firefox 58
- Safari 13
- Node.js 12
- Deno 1.8

## Credits

This module is a simplifed version of [`date-fns-tz`](https://github.com/marnusw/date-fns-tz)'s [`tzTokenizeDate`](https://github.com/marnusw/date-fns-tz/blob/0577249fb6c47ad7b6a84826e90d976dac9ab52e/src/_lib/tzTokenizeDate/index.js#L79-L88) and [`tzParseTimezone`](https://github.com/marnusw/date-fns-tz/blob/0577249fb6c47ad7b6a84826e90d976dac9ab52e/src/_lib/tzParseTimezone/index.js#L88-L97) internals.
