strings/stringHighlight
=======================
Wraps the given word in HTML tags where found in the given string.

```js
function stringHighlight(str: string, word: string, tag: string = 'i'): string
```

### Args

**str:string**  
String to search through for the given word.

**word:string**  
The word to find and highlight in the given string.

**tag:string**  
Wrap the word in this HTML tag, e.g. 'i', 'strong', 'span', etc

### Returns
A string with the word wrapped in the specified tag.

### Examples

```js
import { stringHighlight } from 'utils/strings';

console.log(stringHighlight('foo bar', 'foo'));           // Outputs: '<i>foo</i> bar'
console.log(stringHighlight('Foo bar foo', 'foo'));       // Outputs: '<i>Foo</i> bar <i>foo</i>'
console.log(stringHighlight('foo bar', 'foo', 'strong')); // Outputs: '<strong>foo</strong> bar'
```
