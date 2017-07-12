objects/objectKeyFilter
=======================
Performs a key comparison between two objects, deleting from the first where the keys exist in the second.

```js
function objectKeyFilter(obj1: object, obj2: object): object
```

### Args

**obj1:object**  
The object to modify.

**obj2:object**  
The object containing keys to exclude from obj1.

### Returns
A shallow copy of obj1 with keys removed.

### Examples

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from 'Components/utils/objects';

class App extends React.Component {
  static propTypes = {
    target: PropTypes.element,
    selected: PropTypes.bool,
    className: PropTypes.string
  };

  render() {
    const { className, ...props} = this.props;
    
    return (
      <div
        className={(classNames('dp-app', className))}
        {...objectKeyFilter(props, App.propTypes)}
        >

      </div>
    )
  }
}
```
