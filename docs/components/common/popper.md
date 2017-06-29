Common/Popper
=============
A wrapper around [popper.js](https://popper.js.org), the `Common/Popper` component uses absolute positioning to place elements relative to other elements.

```jsx
import React from 'react';
import { render } from 'react-dom';
import Popper from 'Components/Common/Popper';

render(
    <div>
        <button id="my-button">
            Click
        </button>
        <Popper target="my-button" placement="bottom">
            <p className="tooltip">
                I am displayed below the button!
            </p>
        </Popper>
    </div>
    , document.getElementById('mount')
)
```

#### Properties

`target` - Specifies which element where the popper will be positioned.

Possible values:

* string - The ID of the target element.
* HTMLElement - Reference to the target element.
* function - Returns the target as an HTMLElement.

`placement` - Specifies where to place the popper in relation to the target element.

Possible values:

* string - One of: 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', or 'left-end'.

`offsetX` - Shifts the popper on its X axis.

Possible values:

* number - The offset value in pixels.
* string - The offset value as a unit. Valid units are 'px', '%', '%r', '%p', 'vw', and 'vh'.

`offsetY` - Shifts the popper on its Y axis.

Possible values:

* number - The offset value in pixels.
* string - The offset value as a unit. Valid units are 'px', '%', '%r', '%p', 'vw', and 'vh'.

`opened` - True to display the popper or false to hide it.

`arrow` - True to automatically add an arrow to the popper.

`eventsEnabled` - Add resize/scroll events and recalculate position of the popper when they are triggered. Set to false by default for performance reasons.

`preventOverflow` - Prevents the popper from being positioned outside the boundary. The `eventsEnabled` prop should be set to true when using this prop.

`detached` - True to attach the popper to the document.body. The `eventsEnabled` prop should be set to _true_ when using this prop.

`onCreate` - Called when the internal popper.js instance is created.

`onUpdate` - Called when the internal popper.js instance is updated.

`onOpen` - Called when the popper is opened.

`onClose` - Called when the popper is closed.

#### Custom Arrow

The component attaches an arrow pointing to the target element by default. Use the `Arrow` component from `Common/Popper` to customize the arrow.

```jsx
import React from 'react';
import { render } from 'react-dom';
import Popper, { Arrow } from 'Components/Common/Popper';

render(
    <div>
        <div id="my-div"></div>
        <Popper target="my-div" placement="bottom" arrow={false}>
            <p>Hello, World!</p>
            <Arrow className="custom-arrow" />
        </Popper>
    </div>
    , document.getElementById('mount')
)
```
