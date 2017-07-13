strings/stringInterpolate
=========================
Interpolate placeholder values found in the given string.

The given string may contain placeholder values in the form of #{placeholder} which are replaced by the values found in the given object.

```js
function stringInterpolate(str: string, values: object): string
```

### Args

**str:string**  
String which possibly contains placeholder values to be replaced.

**values:object**  
Object where keys are placeholders.

### Returns
The string with placeholders replaced by values.

### Examples

```js
import { stringInterpolate } from 'utils/strings';

const str = 'Press #{key} now';
const values = {
    key: 'ENTER'
};

console.log(stringInterpolate(str, values)); // Outputs: 'Press ENTER now'
```