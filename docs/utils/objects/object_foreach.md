objects/objectForEach
=====================
Iterates over an object.

Calls the given callback function with each value and key in the object. The callback receives the value as the first argument, and key as the second.

```js
function objectForEach(obj: object, cb: function): object
```

### Args

**obj:object**  
The object to iterate over.

**cb:function**  
The callback function.

### Returns
A shallow copy of the given object.

### Examples

```js
import { objectForEach } from 'utils/objects';

const values = {
    name:  'item',
    title: 'foo'
};
let actual = {};

objectForEach(values, (val, key) => {
    actual[key] = val;
});
console.log(actual);

// Outputs:
// { name: 'item', title: 'foo' }
```