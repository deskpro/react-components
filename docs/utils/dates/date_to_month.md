dates/dateToMonth
=================
Returns the name of the month for the given date.

```js
function dateToMonth(date: Date, short: bool = false): string
```

### Args

**date:Date**  
The date.

**short:bool**  
Return the abbreviated (3 letter) version of the name

### Returns
The name of the month for the given date.

### Examples

```js
import { dateToMonth } from 'utils/dates';

const date = new Date(2017, 6, 4);
console.log(dateToMonth(date));       // Outputs: "July"
console.log(dateToMonth(date, true)); // Outputs: "Jul"
```