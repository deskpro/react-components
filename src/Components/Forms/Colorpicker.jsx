import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SketchPicker } from 'react-color';

class Colorpicker extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    name:      PropTypes.string,
    value:     PropTypes.oneOfType([
      PropTypes.shape({
        r: PropTypes.number.isRequired,
        g: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
        a: PropTypes.number,
      }),
      PropTypes.shape({
        h: PropTypes.number.isRequired,
        s: PropTypes.number.isRequired,
        l: PropTypes.number.isRequired,
        a: PropTypes.number,
      }),
      PropTypes.string
    ]),
    format:   PropTypes.oneOf(['hex', 'rgb', 'hsl']),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    name:      '',
    value:     {
      r: 70,
      g: 150,
      b: 220,
      a: 1
    },
    format: 'hex',
    onChange() {}
  };

  constructor(props) {
    super(props);

    this.state = {
      displayColorPicker: false,
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    const { name } = this.props;
    this.props.onChange(color[this.props.format], name);
  };

  render() {
    const { className, format } = this.props;
    const color = this.props.value;

    let background;
    switch (format) {
      case 'hex':
        background = color;
        break;
      case 'hsl': {
        const {
          h = 0, s = 0, l = 0, a = 1
        } = color;
        background = `hsl(${h}, ${s}, ${l}, ${a}`;
        break;
      }
      case 'rgb':
      default: {
        const {
          r = 0, g = 0, b = 0, a = 1
        } = color;
        background = `rgba(${r}, ${g}, ${b}, ${a})`;
      }
    }

    return (
      <div
        className={classNames(
          'dp-colorpicker',
          className
        )}
      >
        <div className="dp-colorpicker--swatch" onClick={this.handleClick}>
          <div className="dp-colorpicker--swatch--color" style={{ background }} />
        </div>
        { this.state.displayColorPicker ? (
          <div className="dp-colorpicker--popover">
            <div className="dp-colorpicker--popover--cover" onClick={this.handleClose} />
            <SketchPicker color={color} onChange={this.handleChange} />
          </div>
        ) : null }
      </div>
    );
  }
}

export default Colorpicker;
