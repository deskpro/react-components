strings/toUpperFirst
====================
Upper cases the first letter in a string.

```js
function toUpperFirst(str: string): string
```

### Args

**str:string** 
The string to transform.

### Returns
The string with the first character upper cased.

### Examples

```js
import { toUpperFirst } from 'utils/strings';

console.log(toUpperFirst('foo')); // Outputs: 'Foo'
console.log(toUpperFirst('foo bar')); // Outputs: 'Foo bar'
```
