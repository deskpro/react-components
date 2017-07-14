strings/stringEscapeHTML
==================
Converts HTML special characters into entities.

```js
function stringEscapeHTML(str: string): string
```

### Args

**str:string**  
The string to escape.

### Returns
The string with special HTML characters replaced by entities.

### Examples

```js
import { stringEscapeHTML } from 'utils/strings';

console.log(stringEscapeHTML('<a>foo</a>')); // Outputs: '&lt;a&gt;foo&lt;/a&gt;'
```
