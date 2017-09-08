import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'Components/Icon';
import { objectKeyFilter } from 'utils/objects';

class Tag extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    editable:  PropTypes.bool,
    children:  PropTypes.node,
    value:     PropTypes.node,
    onRemove:  PropTypes.func
  };

  static defaultProps = {
    className: '',
    editable:  false,
    children:  '',
    value:     '',
    onRemove() {}
  };

  handleRemove = (event) => {
    event.stopPropagation();
    const value = this.props.value || this.props.children;
    this.props.onRemove(value);
  };

  render() {
    const { children, editable, className, ...props } = this.props;
    return (
      <span
        className={classNames('dp-tag', className, { editable })}
        {...objectKeyFilter(props, Tag.propTypes)}
      >
        {children}
        { editable ? <span onClick={this.handleRemove}><Icon name="close" className="dp-tag__close" /></span> : null }
      </span>
    );
  }
}
export default Tag;
