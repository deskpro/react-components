import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  static propTypes = {
    title:      PropTypes.string,
    children:   PropTypes.node,
    buttons:    PropTypes.node,
    style:      PropTypes.object,
    closeModal: PropTypes.func,
  };

  static defaultProps = {
    title:    '',
    children: '',
    buttons:  [],
    style:    {},
    closeModal() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      width:  window.innerWidth,
      height: window.innerHeight
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', () => {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.updateWindowDimensions();
          this.ticking = false;
        });
      }
      this.ticking = true;
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width:  window.innerWidth,
      height: window.innerHeight
    });
  };

  render() {
    const { title, children, buttons, style, closeModal } = this.props;
    const { width, height } = this.state;
    const modalStyle = Object.assign({}, style);
    modalStyle.maxHeight = height * 0.7;
    modalStyle.maxWidth  = width * 0.7;
    return (
      <div className="dp-modal__overlay">
        <div
          className="dp-modal"
          style={modalStyle}
        >
          <div className="dp-modal__title">
            {title}
            <div className="dp-modal__close" onClick={closeModal}>X</div>
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
