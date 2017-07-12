regexp/regexpEscape
===================
Escapes the a string of any special regexp characters.

```js
function regexpEscape(str: string): string
```

### Args

**str:string**  
The string to escape.

### Returns
The string with special regexp characters escaped.

### Examples

```js
import { regexpEscape } from 'utils/regexp';

console.log(regexpEscape('(foo)'));    // Outputs: '\(foo\)'
console.log(regexpEscape('foo$bar^')); // Outputs: 'foo\$bar\^'
```
