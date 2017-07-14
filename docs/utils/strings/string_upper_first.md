strings/stringUpperFirst
========================
Upper cases the first letter in a string.

```js
function stringUpperFirst(str: string): string
```

### Args

**str:string** 
The string to transform.

### Returns
The string with the first character upper cased.

### Examples

```js
import { stringUpperFirst } from 'utils/strings';

console.log(stringUpperFirst('foo'));     // Outputs: 'Foo'
console.log(stringUpperFirst('foo bar')); // Outputs: 'Foo bar'
```
