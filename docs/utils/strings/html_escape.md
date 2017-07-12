strings/htmlEscape
==================
Converts HTML special characters into entities.

```js
function htmlEscape(str: string): string
```

### Args

**str:string**  
The string to escape.

### Returns
The string with special HTML characters replaced by entities.

### Examples

```js
import { htmlEscape } from 'utils/strings';

console.log(htmlEscape('<a>foo</a>')); // Outputs: '&lt;a&gt;foo&lt;/a&gt;'
```
