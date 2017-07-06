import React from 'react';

export class TestButton extends React.Component {
  render() {
    const { popper, ...props} = this.props;

    return (
      <button {...props} onClick={() => popper.toggle(this)}>
        Click Me
      </button>
    )
  }
}
