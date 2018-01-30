import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import newId from 'utils/newid';
import noop from 'utils/noop';
import { objectKeyFilter } from 'utils/objects';

/**
 * Wraps optional form fields which may be shown or hidden.
 */
export default class HiddenFields extends React.Component {
  static propTypes = {
    /**
     * When true the children are displayed.
     */
    opened:         PropTypes.bool,
    /**
     * Link text to display to show the children.
     */
    labelShow:      PropTypes.string,
    /**
     * Link text to display to hide the children.
     */
    labelHide:      PropTypes.string,
    /**
     * Styles which get applied to the label.
     */
    labelStyle:     PropTypes.object,
    /**
     * Class name applied to the label.
     */
    labelClassName: PropTypes.string,
    /**
     * ID to assign to the element.
     */
    id:             PropTypes.string,
    /**
     * Called when the children are shown or hidden.
     */
    onChange:       PropTypes.func,
    /**
     * CSS classes to apply to the element.
     */
    className:      PropTypes.string,
    /**
     * Children to render.
     */
    children:       PropTypes.node
  };

  static defaultProps = {
    id:             '',
    opened:         false,
    labelStyle:     {},
    labelClassName: '',
    labelShow:      'Show optional fields',
    labelHide:      'Hide optional fields',
    className:      '',
    children:       '',
    onChange:       noop
  };

  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened
    };
    this.id = (props.id) ? props.id : newId('');
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ opened: !this.state.opened }, () => {
      this.props.onChange(this.state.opened);
    });
  };

  render() {
    const {
      labelShow, labelHide, labelStyle, labelClassName, className, children, ...props
    } = this.props;
    const { opened } = this.state;

    return (
      <div
        className={classNames(
          'dp-hidden-fields',
          {
            'dp-hidden-fields--open': opened
          },
          className
        )}
        {...objectKeyFilter(props, HiddenFields.propTypes)}
      >
        <div
          aria-expanded={opened}
          id={`dp-hidden-fields-body-${this.id}`}
          className="dp-hidden-fields__body"
        >
          {children}
        </div>
        <button
          style={labelStyle}
          className={classNames('dp-hidden-fields__label', labelClassName)}
          onClick={this.handleClick}
          aria-label={`Click to ${opened ? 'close' : 'open'}.`}
          aria-controls={`dp-hidden-fields-body-${this.id}`}
        >
          { opened ? labelHide : labelShow }
        </button>
      </div>
    );
  }
}
