import React from 'react';
import PropTypes from 'prop-types';
import { Tag, SearchButton } from 'Components/Forms';


class TagSet extends React.Component {
  static propTypes = {
    tags:     PropTypes.array.isRequired,
    name:     PropTypes.string,
    options:  PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    editable: PropTypes.bool,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    name:     '',
    editable: true,
    options:  [],
    onChange()   {}
  };

  constructor(props) {
    super(props);
    this.state = {
      results: this.props.options
    };
  }

  handleChange = (tags) => {
    this.props.onChange(tags, this.props.name);
  };

  /**
   * Searches the available tags for the given value
   */
  handleInputChange = (value) => {
    if (!value || typeof value !== 'string') {
      this.setState({ results: this.props.options });
      return;
    }

    const find = value.toLowerCase();
    const results = this.props.options.filter(item => item.toLowerCase().indexOf(find) !== -1);
    this.setState({ results });
  };

  /**
   * Handles the user clicking one of the search results
   */
  handleSearchSelect = (tag) => {
    this.addTag(tag);
    this.searchRef.close();
  };

  /**
   * Handles pressing ENTER in the search box
   */
  handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addTag(e.target.value);
      this.searchRef.close();
    }
  };

  /**
   * Adds the given tag to tags and pass result to onChange props
   */
  addTag = (tag) => {
    const tags = this.props.tags;
    if (tags.indexOf(tag) === -1) {
      tags.push(tag);
      this.handleChange(tags);
    }
  };

  /**
   * Removes the given tag from the tags and pass result to onChange props
   */
  removeTag = (tag) => {
    const tags = this.props.tags;
    this.handleChange(tags.filter(t => t !== tag));
  };

  render() {
    const { tags, editable } = this.props;
    const { results } = this.state;
    const content = tags.map(tag =>
      <Tag key={tag} editable={editable} onRemove={this.removeTag}>{tag}</Tag>
    );
    return (
      <div className="dp-tag-set">
        {content}
        <SearchButton
          results={results}
          ref={(c) => { this.searchRef = c; }}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputKeyDown}
          onSelect={this.handleSearchSelect}
        >
          No results for <i className="dp-colour-sonic-secondary">{'\'$value$\''}</i> press ENTER to add new label
        </SearchButton>
      </div>
    );
  }
}
export default TagSet;
