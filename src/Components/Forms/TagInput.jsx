import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tag } from 'Components/Forms';
import TagsInput from 'react-tagsinput';
import onClickOutside from 'react-onclickoutside';

class TagInput extends React.Component {
  static propTypes = {
    tags:       PropTypes.array.isRequired,
    inputProps: PropTypes.object,
    onChange:   PropTypes.func,
    editable:   PropTypes.bool,
  };
  static defaultProps = {
    editable:   false,
    inputProps: { placeholder: 'Add a label' },
    onChange()   {}
  };

  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
  }

  setEditable = () => {
    if (!this.props.editable) {
      this.setState({
        editable: true
      });
    }
  };

  handleChange = (tags) => {
    this.props.onChange(tags);
  };

  handleClickOutside = () => {
    this.setState({
      editable: false
    });
  };

  renderTag = (tagProps) => {
    const { tag, key, onRemove } = tagProps;
    return (
      <Tag
        key={key}
        editable
        onClose={() => onRemove(key)}
      >
        {tag}
      </Tag>
    );
  };

  renderTags = () => {
    const { tags, inputProps, editable, ...elementProps } = this.props;
    if (this.state.editable || editable) {
      const props = Object.assign({}, elementProps);
      delete props.onChange;
      return (
        <TagsInput
          value={tags}
          renderTag={this.renderTag}
          inputProps={inputProps}
          onChange={this.handleChange}
          {...props}
        />
      );
    }
    if (!tags) {
      return null;
    }
    return tags.map((tag, key) => <Tag key={key}>{tag}</Tag>);
  };

  render() {
    const { editable } = this.state;
    return (
      <div
        className={classNames('dp-tag-input', { editable })}
        onBlur={this.handleBlur}
        onClick={this.setEditable}
      >
        {this.renderTags()}
      </div>
    );
  }
}
export default onClickOutside(TagInput);
