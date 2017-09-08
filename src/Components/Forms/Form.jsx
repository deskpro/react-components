import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';

/**
 * Renders a form and handles its submission.
 */
export default class Form extends React.Component {
  static propTypes = {
    /**
     * Whether submitting the form should automatically prevent the default action.
     */
    preventDefault: PropTypes.bool,
    /**
     * CSS classes to apply to the element.
     */
    className:      PropTypes.string,
    /**
     * Children to render.
     */
    children:       PropTypes.node,
    /**
     * Called when the form is submitted. Receives the event and form values as arguments.
     */
    onSubmit:       PropTypes.func
  };

  static defaultProps = {
    preventDefault: true,
    className:      '',
    children:       '',
    onSubmit:       noop
  };

  handleSubmit = (e) => {
    const { preventDefault, onSubmit } = this.props;
    const values   = {};
    const elements = e.target.elements;

    if (preventDefault) {
      e.preventDefault();
    }
    if (onSubmit) {
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].name) {
          values[elements[i].name] = elements[i].value;
        }
      }
      onSubmit(e, values);
    }
  };

  render() {
    const { className, children, ...props } = this.props;

    return (
      <form
        onSubmit={this.handleSubmit}
        className={classNames('dp-form', className)}
        {...objectKeyFilter(props, Form.propTypes)}
      >
        {children}
      </form>
    );
  }
}
