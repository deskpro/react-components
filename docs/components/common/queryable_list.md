Common/QueryableList
====================
A unordered list which can be filtered by query values.

```jsx
<QueryableList whereName="agent">
    <ListElement name="agent">
        Agent one
    </ListElement>
    <ListElement name="agent">
        Agent two
    </ListElement>
    <ListElement name="department">
        Department one
    </ListElement>
    <ListElement name="department">
        Department two
    </ListElement>
</QueryableList>
```

### Props

**whereName={string}**  
Filter list elements by name. When set to "@all" the entire list is displayed, and the entire list is hidden when set to "@none".

### Examples

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whereName: "@all"
    }
  }

  handleChange = (e) => {
    this.setState({whereName: e.target.value});
  };

  render() {
    const { whereName } = this.state;

    return (
      <div>
        <select onChange={this.handleChange}>
          <option value="@all">All</option>
          <option value="@none">None</option>
          <option value="integrations">Integrations</option>
          <option value="feedback">Feedback</option>
          <option value="agent">Agent</option>
          <option value="department">Department</option>
          <option value="product">Product</option>
        </select>

        <QueryableList whereName={whereName}>
          <ListElement name="integrations">
            Integrations
          </ListElement>
          <ListElement name="feedback">
            Feedback
          </ListElement>
          <ListElementGroup name="agent">
            <ListElement>
              Wendy Pride
            </ListElement>
            <ListElement>
              Bobby Steiner
            </ListElement>
          </ListElementGroup>
          <ListElementGroup name="department">
            <ListElement>
              Sales
            </ListElement>
            <ListElement>
              Marketing
            </ListElement>
          </ListElementGroup>
          <ListElementGroup name="product">
            <ListElement>
              DeskPRO Cloud
            </ListElement>
            <ListElement>
              DeskPRO On-Premise
            </ListElement>
          </ListElementGroup>
        </QueryableList>
      </div>
    )
  }
}

render(<App />, document.getElementById('mount'));
```
