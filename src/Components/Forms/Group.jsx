import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { childrenRecursiveMap } from 'utils/props';
import { objectKeyFilter } from 'utils/objects';
import Label from 'Components/Forms/Label';

class Group extends React.Component {
  static propTypes = {
    /**
     * Value for the group label.
     */
    label:     PropTypes.string,
    /**
     * ID of the child the label belongs to.
     */
    htmlFor:   PropTypes.string,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string,
    /**
     * Children to render.
     */
    children:  PropTypes.node
  };

  static defaultProps = {
    label:     '',
    htmlFor:   '',
    className: '',
    children:  ''
  };

  render() {
    const { label, className, children, ...props } = this.props;
    let { htmlFor } = this.props;

    if (htmlFor === '') {
      childrenRecursiveMap(children, (child) => {
        if (child.props.id !== undefined && htmlFor === '') {
          htmlFor = child.props.id;
        }
      });
    }

    return (
      <div
        className={classNames('dp-form-group', className)}
        {...objectKeyFilter(props, Group.propTypes)}
      >
        {label && <Label htmlFor={htmlFor}>{label}</Label>}
        {children}
      </div>
    );
  }
}

export default Group;
