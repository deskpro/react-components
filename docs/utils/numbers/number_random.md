numbers/numberRandom
====================
Returns a random whole number between a minimum and maximum number.

```js
function numberRandom(min: number, max: number): number
```

### Args

**min:number**  
The minimum number.

**max:number**  
The maximum number.


### Returns
A whole number between min and max.

### Examples

```js
import { numberRandom } from 'utils/numbers';

console.log(numberRandom(1, 10)); // Outputs a number between 1 and 10
```