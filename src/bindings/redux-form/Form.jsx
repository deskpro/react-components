import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { reduxForm, propTypes } from 'redux-form';
import { objectKeyFilter } from 'utils/objects';

/**
 * @see https://redux-form.com/7.0.4/docs/api/reduxform.md/
 */
class ConnectedForm extends React.Component {
  static propTypes = {
    /**
     * CSS classes to apply to the element.
     */
    className:         PropTypes.string,
    /**
     * Children to render.
     */
    children:          PropTypes.node,
    /**
     * Called when the form is submitted. Receives the form values an an object of
     * key/value pairs.
     */
    onSubmit:          PropTypes.func,
    /**
     * Callback provided by redux-form which calls onSubmit() after validating the
     * form and applying normalizers.
     */
    handleSubmit:      PropTypes.func,
    /**
     * Callback which clears submit errors.
     */
    clearSubmitErrors: PropTypes.func,
    /**
     * @see https://redux-form.com/7.0.4/docs/api/props.md/#-code-props-code-
     */
    ...propTypes
  };

  static defaultProps = {
    className:         '',
    children:          '',
    onSubmit:          () => {},
    handleSubmit:      () => {},
    clearSubmitErrors: () => {}
  };

  render() {
    const { handleSubmit, onSubmit, className, children, ...props } = this.props;

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classNames('dp-form', className)}
        {...objectKeyFilter(props, ConnectedForm.propTypes)}
      >
        {children}
      </form>
    );
  }
}

ConnectedForm = reduxForm({
  enableReinitialize: true
})(ConnectedForm);

/**
 * Wraps the ConnectedForm component so a prop named 'name' can be used
 * instead of 'form' on the redux form.
 */
export default class Form extends React.Component {
  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    name: ''
  };

  render() {
    const { name, ...props } = this.props;

    return <ConnectedForm form={name || 'form'} {...props} />;
  }
}
