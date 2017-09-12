Section
=======
Renders a group of elements which represent a "section" of the page.

### Props

**title={string}**  
Sets the value of the title to display at the top of the section.


### CSS
Adds `dp-section` to the root element.


### Examples

```jsx
import React from 'react';
import { render } from 'react-dom';
import Section from 'Components/Section';

const App = () => (
    <Section title="User Settings">
        Enter your settings...
    </Section>
);

render(<App />, document.getElementById('mount'));
```