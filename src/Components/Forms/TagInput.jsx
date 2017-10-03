import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tag } from 'Components/Forms';
import TagsInput from 'react-tagsinput';
import Autosuggest from 'react-autosuggest';
import onClickOutside from 'react-onclickoutside';

class TagInput extends React.Component {
  static propTypes = {
    tags:       PropTypes.array.isRequired,
    inputProps: PropTypes.object,
    editable:   PropTypes.bool,
    options:    PropTypes.array,
    style:      PropTypes.object,
    onChange:   PropTypes.func,
  };
  static defaultProps = {
    editable:   true,
    inputProps: { placeholder: 'Add a label' },
    options:    [],
    style:      {},
    onChange()  {},
  };

  static renderTag(tagProps) {
    const { tag, key, onRemove } = tagProps;
    return (
      <Tag
        key={key}
        editable
        onRemove={() => onRemove(key)}
      >
        {tag}
      </Tag>
    );
  }

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
    if (this.autoSuggestInput) {
      this.autoSuggestInput.focus();
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

  renderInputComponent = props => <input type="text" {...props} ref={(c) => { this.autoSuggestInput = c; }} />;

  renderInput = ({ addTag, ...props }) => {
    const { options } = this.props;
    const handleOnChange = (e, { method }) => {
      if (method === 'enter') {
        e.preventDefault();
      } else {
        props.onChange(e);
      }
    };

    const inputValue = (props.value && props.value.trim().toLowerCase()) || '';
    const inputLength = inputValue.length;

    const suggestions = options.filter(option => option.toLowerCase().slice(0, inputLength) === inputValue);

    return (
      <Autosuggest
        suggestions={suggestions}
        shouldRenderSuggestions={value => value && value.trim().length > 0}
        getSuggestionValue={suggestion => suggestion}
        renderSuggestion={suggestion => <span>{suggestion}</span>}
        renderInputComponent={this.renderInputComponent}
        inputProps={{ ...props, onChange: handleOnChange }}
        onSuggestionSelected={(e, { suggestion }) => {
          addTag(suggestion);
        }}
        onSuggestionsClearRequested={() => {}}
        onSuggestionsFetchRequested={() => {}}
      />
    );
  };

  renderTags = () => {
    const { tags, inputProps, editable, options, ...elementProps } = this.props;
    if (this.state.editable || editable) {
      const props = Object.assign({}, elementProps);
      delete props.onChange;
      return (
        <TagsInput
          value={tags}
          renderTag={TagInput.renderTag}
          renderInput={options ? this.renderInput : null}
          inputProps={inputProps}
          onChange={this.handleChange}
          {...props}
        />
      );
    }
    if (!tags) {
      return null;
    }
    return tags.map(tag => <Tag key={tag}>{tag}</Tag>);
  };

  render() {
    const { style } = this.props;
    const { editable } = this.state;
    return (
      <div
        className={classNames('dp-tag-input', { editable })}
        style={style}
        onClick={this.setEditable}
      >
        {this.renderTags()}
      </div>
    );
  }
}
export default onClickOutside(TagInput);
