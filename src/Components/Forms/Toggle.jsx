import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class Toggle extends React.Component {
  static propTypes = {
    checked:   PropTypes.bool,
    disabled:  PropTypes.bool,
    onChange:  PropTypes.func,
    id:        PropTypes.string,
    className: PropTypes.string,
    value:     PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children:  PropTypes.node,
  };

  static defaultProps = {
    onChange() {},
    checked:   false,
    disabled:  false,
    className: '',
    id:        null,
    value:     '',
    children:  null,
  };

  onClick = () => {
    const { checked, disabled, onChange } = this.props;
    if (disabled) {
      return;
    }

    onChange(!checked);
  };

  render() {
    const {
      children, value, id, checked, disabled, className
    } = this.props;

    return  (
      <div
        className={classNames(
          'dp-input--toggle',
          className,
          {
            disabled,
            checked,
          }
        )}
      >
        <input
          type="checkbox"
          value={value}
          id={id}
          checked={checked}
          onChange={() => {}}
          className="hidden right"
        />
        <label onClick={this.onClick} htmlFor={id}>
          {children}
        </label>
      </div>
    );
  }
}

export default Toggle;
