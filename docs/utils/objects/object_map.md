objects/objectMap
=================
Creates an array from the results of calling a function on each item in an object.

Does not add undefined values to the resulting array.

```js
function objectMap(obj: object, cb: function): array
```

### Args

**obj:object**  
The object to iterate over.

**cb:function**  
The callback function.

### Returns
An array with the mapped values.


### Examples

```js
import { objectMap } from 'utils/objects';

const values = {
    name:  'item',
    title: 'foo',
    alt:   'bar'
};

let results = objects.objectMap(values, (val, key) => {
    if (key !== 'alt') {
        return val.toUpperCase();
    }
});
console.log(results);

// Outputs:
// [ 'ITEM', 'FOO' ]
```