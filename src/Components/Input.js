import React from 'react';
import SVGInline from 'react-svg-inline';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import newId from 'Components/utils/newid';
import LoadingSvg from '../styles/images/input_loading.svg';
import ValidatedSvg from '../styles/images/tick.svg';

class Input extends React.Component {
  static propTypes = {
    children:   PropTypes.node,
    className:  PropTypes.string,
    label:      PropTypes.string,
    id:         PropTypes.string,
    validated:  PropTypes.bool,
    validating: PropTypes.bool,
    disabled:   PropTypes.bool,
    readonly:   PropTypes.bool,
    required:   PropTypes.bool,
  };

  componentWillMount() {
    if (this.props.id) {
      this.id = this.props.id;
    } else {
      this.id = newId();
    }
  }

  render() {
    const { className, validated, validating, ...elementProps } = this.props;
    return (
      <div
        className={
          classNames(
            'dp-input',
            className,
            {
              'dp-input--validating': validating,
              'dp-input--validated':  validated
            }
          )
        }
      >
        <input
          id={this.id}
          {...elementProps}
        />
        { validating ? <SVGInline className="dp-input__icon" svg={LoadingSvg} /> : '' }
        { validated ? <SVGInline className="dp-input__icon" svg={ValidatedSvg} /> : '' }
      </div>
    );
  }
}
export default Input;
