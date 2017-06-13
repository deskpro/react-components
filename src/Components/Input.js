import React from 'react';
import PropTypes from 'prop-types';
// import SVGInline from 'react-svg-inline';
import classNames from 'classnames';
import newId from 'Components/utils/newid';
// import LoadingSvg from 'styles/images/input_loading.svg';
// import ValidatedSvg from 'styles/images/tick.svg';

class Input extends React.Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string,
    label:      PropTypes.string,
    id:         PropTypes.string,
    icon:       PropTypes.string,
    validated:  PropTypes.bool,
    validating: PropTypes.bool,
    disabled:   PropTypes.bool,
    readonly:   PropTypes.bool,
    required:   PropTypes.bool,
    onChange:   PropTypes.func
  };

  componentWillMount() {
    if (this.props.id) {
      this.id = this.props.id;
    } else {
      this.id = newId();
    }
  }

  onChange = (event) => {
    this.props.onChange(event.currentTarget.value || '');
  };

  getIcon = () => {
    const { icon } = this.props;
    if (!icon) {
      return null;
    }
    return <i className={classNames('fa', `fa-${icon}`)} />;
  };

  focus = () => {
    this.input.focus();
  };

  render() {
    const { className, validated, validating, icon, ...elementProps } = this.props;
    const props = Object.assign({}, elementProps);
    delete props.onChange;
    return (
      <div
        className={
          classNames(
            'dp-input',
            className,
            {
              'dp-input--validating': validating,
              'dp-input--validated':  validated,
              'dp-input--with-icon':  icon,
            }
          )
        }
      >
        {this.getIcon()}
        <input
          id={this.id}
          ref={(c) => { this.input = c; }}
          onChange={this.onChange}
          {...props}
        />
        {/* { validating ? <SVGInline className="dp-input__icon" svg={LoadingSvg} /> : '' }*/}
        {/* { validated ? <SVGInline className="dp-input__icon" svg={ValidatedSvg} /> : '' }*/}
      </div>
    );
  }
}
export default Input;
