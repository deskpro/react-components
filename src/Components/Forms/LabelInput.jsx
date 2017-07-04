import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Label } from 'Components/Forms';
import TagsInput from 'react-tagsinput';
import onClickOutside from 'react-onclickoutside';

class LabelInput extends React.Component {
  static propTypes = {
    labels:     PropTypes.array.isRequired,
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

  handleChange = (labels) => {
    this.props.onChange(labels);
  };

  handleClickOutside = () => {
    this.setState({
      editable: false
    });
  };

  renderLabel = (labelProps) => {
    const { tag, key, onRemove } = labelProps;
    return (
      <Label
        key={key}
        editable
        onClose={() => onRemove(key)}
      >
        {tag}
      </Label>
    );
  };

  renderLabels = () => {
    const { labels, inputProps } = this.props;
    if (this.state.editable || this.props.editable) {
      return (
        <TagsInput
          value={labels}
          renderTag={this.renderLabel}
          inputProps={inputProps}
          onChange={this.handleChange}
        />
      );
    }
    if (!labels) {
      return null;
    }
    return labels.map((label, key) => <Label key={key}>{label}</Label>);
  };

  render() {
    const { editable } = this.state;
    return (
      <div
        className={classNames('dp-label-input', { editable })}
        onBlur={this.handleBlur}
        onClick={this.setEditable}
      >
        {this.renderLabels()}
      </div>
    );
  }
}
export default onClickOutside(LabelInput);
