import React from 'react';
import PropTypes from 'prop-types';

export class TestButton extends React.Component {
  render() {
    const { popper, ...props } = this.props;

    return (
      <button {...props} onClick={() => popper.toggle(this)}>
        Click Me
      </button>
    );
  }
}

TestButton.propTypes = {
  popper: PropTypes.object
};
