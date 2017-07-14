dates/dateNumberOfDaysInMonth
==============================
Returns the number of days in the given date.

```js
function dateNumberOfDaysInMonth(date: Date): number
```

### Args

**date:object**  
The date (year and month) to check.

### Returns
The number of days in the given month.

### Examples

```js
import { dateNumberOfDaysInMonth } from 'utils/dates';

console.log(dateNumberOfDaysInMonth(new Date(2017, 7))); // Outputs: 31
console.log(dateNumberOfDaysInMonth(new Date(2017, 4))); // Outputs: 30
```