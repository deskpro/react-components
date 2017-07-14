dates/datesCalendarDays
=======================
Returns an array of all the days in the given date.

```js
function datesCalendarDays(date: Date): array
```

### Args

**date:Date**  
The date to get the days for.

### Returns
An array which is padded so the first day (index 0) is always a sunday, and the last day is always saturday. The padding numbers will be negative or greater than the number of days in the given month.

### Examples

```js
import { datesCalendarDays } from 'utils/dates';

const date = new Date(2017, 7);
console.log(datesCalendarDays(date));

// Outputs:
//    [ -1,
//      0,
//      1,
//      2,
//      3,
//      4,
//      5,
//      6,
//      7,
//      8,
//      9,
//      10,
//      11,
//      12,
//      13,
//      14,
//      15,
//      16,
//      17,
//      18,
//      19,
//      20,
//      21,
//      22,
//      23,
//      24,
//      25,
//      26,
//      27,
//      28,
//      29,
//      30,
//      31,
//      32,
//      33 ]
```
