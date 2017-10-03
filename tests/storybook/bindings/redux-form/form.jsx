import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { decorateAction } from '@storybook/addon-actions';
import { Form, Button } from 'bindings/redux-form';
import store from './store/store';

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);

const StoryForm = ({ children, ...props }) => (
  <Provider store={store}>
    <Form name="story" onSubmit={firstArgAction('onSubmit')} style={{ margin: 20 }} {...props}>
      {children}
      <Button>Submit</Button>
    </Form>
  </Provider>
);

StoryForm.propTypes = {
  children: PropTypes.node.isRequired
};

export default StoryForm;
