Redux Form
==========
Components are included with deskpro-components which bind the form components to [React Redux](https://github.com/reactjs/react-redux) and [Redux Form](https://github.com/erikras/redux-form/). This document covers installing the required dependencies and creating a simple form.

## Setup

### Installing dependencies

`npm install --save deskpro-components react-redux redux-form`

### Setup the reducer

Create the root reducer per the [Redux Form documentation](https://redux-form.com/7.0.4/docs/gettingstarted.md/#step-1-of-4-form-reducer).

```js
// reducers/rootReducer.js

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form
});

export default rootReducer;
```

### Create the form

The form elements exported by 'deskpro-components/bindings/redux-form' are [Redux Form `Field` components](https://redux-form.com/7.0.4/docs/api/field.md/) which are bound to deskpro-component form components. Each form must be wrapped with the `Form` component, which requires a `name` prop. The name of each form must be unique to the application. The form values will be saved in the Redux store using the given name, e.g. form.account.

The `onSubmit` prop receives the submitted form values as an object of key/value pairs. For example `{ username: 'foo', password: 'bar', bio: 'This is my bio' }`.

```jsx
// AccountForm.jsx

import React from 'react';
import { Form, Button, Input, Textarea } from 'deskpro-components/bindings/redux-form';

class AccountForm extends React.Component {
  handleSubmit = (values) => {
      console.log(values);
  };

  render() {
    return (
      <Form name="account" onSubmit={this.handleSubmit}>
        <Input 
          name="username"
          label="Username"
        />
        <Input 
          name="password"
          type="password"
          label="Password"
        />
        <Textarea
          name="bio"
          label="Bio"
        />
        <Button type="primary">
          Save
        </Button>
      </Form>
    );
  }
}
```

### Render the form

Create your store and render the form using the react-redux `Provider` component.

```jsx
// App.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from 'reducers/rootReducer';
import AccountForm from './AccountForm';

const App = () => (
    <AccountForm />
);

const store = createStore(
    rootReducer
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount')
);
```


## Validators

Form values are validated by passing one or more functions to the form fields. Developers may write their own and/or use the validators provided by the deskpro-component bindings.

```jsx
import React from 'react';
import { Form, Button, Input, Textarea, validators } from 'deskpro-components/bindings/redux-form';

const AccountForm = () => (
  <Form name="account">
    <Input 
      name="username"
      label="Username"
      validate={[validators.required, validators.alphaNumeric]}
    />
    <Input 
      name="password"
      type="password"
      label="Password"
      validate={[validators.required, validators.minLength(8)]}
    />
    <Textarea
      name="bio"
      label="Bio"
      validate={validators.maxLength(500)}
    />
    <Button type="primary">
      Save
    </Button>
  </Form>
);
```

The following validators are including with the bindings.

* required      - Validate the given value is not empty
* maxLength     - Validates the input value contains fewer than max characters
* minLength     - Validates the input value contains more than min characters
* alphaNumeric  - Validates the input value only contains alpha-numeric characters
* alpha         - Validates the input value only contains alpha characters
* numeric       - Validates the input value only contains numeric characters
* email         - Validates the input value is a valid email address
* regexp        - Validates that the input value matches against the given regular expression

Validators are simple functions which receive the form value, and return `undefined` when the value passes validation, or a string containing an error message when validation fails.

```jsx
import React from 'react';
import { Form, Input } from 'deskpro-components/bindings/redux-form';

const tooOld = (value) => {
  return (value && value > 65)
    ? 'You might be too old for this'
    : undefined;
};

const AccountForm = () => (
  <Form name="account">
    <Input 
      name="age"
      label="Age"
      validate={tooOld}
    />
  </Form>
);
```
