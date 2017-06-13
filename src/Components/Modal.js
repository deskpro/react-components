import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  static propTypes = {
    title:    PropTypes.string,
    children: PropTypes.node,
    buttons:  PropTypes.node,
    style:    PropTypes.object
  };

  render() {
    const { title, children, buttons, style } = this.props;
    return (
      <div className="dp-modal__overlay">
        <div
          className="dp-modal"
          style={style}
        >
          <div className="dp-modal__title">
            {title}
            <div className="dp-modal__close">X</div>
          </div>
          <div className="dp-modal__body">
            {children}
          </div>
          <div className="dp-modal__buttons">
            {buttons}
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
