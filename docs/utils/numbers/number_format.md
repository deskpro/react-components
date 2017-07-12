numbers/numberFormat
====================
Formats a number to include commas (or any separator) in the thousandths place.

```js
function numberFormat(num: number, separator: string = THOUSANDTHS_SEPARATOR): string
```

### Args

**num:number**  
Number to format.

**separator:string**  
Character that separates thousandths.

### Returns
The formatted number.

### Examples

```js
import { numberFormat } from 'utils/numbers';

console.log(numberFormat(1234));      // Outputs: 1,234
console.log(numberFormat(1234, '.')); // Outputs: 1.234
```
