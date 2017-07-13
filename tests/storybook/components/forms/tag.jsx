import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Tag, TagInput, SearchButton } from 'Components/Forms';

const availableTags = [
  'Agents',
  'DeskPRO Cloud',
  'Docs',
  'Features',
  'Feedback',
  'General'
];

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags:    ['Agents', 'Docs', 'Feedback'],
      results: []
    };
  }

  /**
   * Searches the available tags for the given value
   */
  handleInputChange = (value) => {
    if (!value || typeof value !== 'string') {
      this.setState({ results: [] });
      return;
    }

    const find = value.toLowerCase();
    const results = availableTags.filter(item => item.toLowerCase().indexOf(find) !== -1);
    this.setState({ results });
  };

  /**
   * Handles pressing ENTER in the search box
   */
  handleInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.addTag(e.target.value);
      this.searchRef.close();
    }
  };

  /**
   * Handles the user clicking one of the search results
   */
  handleSearchSelect = (tag) => {
    this.addTag(tag);
    this.searchRef.close();
  };

  /**
   * Adds the given tag to this.state.tags
   */
  addTag = (tag) => {
    const tags = this.state.tags;
    if (tags.indexOf(tag) === -1) {
      tags.push(tag);
      this.setState({ tags });
    }
  };

  render() {
    const { tags, results } = this.state;

    return (
      <div>
        <div>
          <h3>Tags</h3>
          <Tag>Custom work</Tag>
          <Tag>Report back on bug fix</Tag>
          <Tag>VIP</Tag>
        </div>
        <div>
          <h3>Tag input</h3>
          <TagInput
            tags={tags}
            style={{ display: 'inline-block' }}
          />
          <SearchButton
            results={results}
            ref={ref => this.searchRef = ref}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
            onSelect={this.handleSearchSelect}
          >
            No results for <i className="dp-colour-sonic-secondary">'$value$'</i> press ENTER to add new label
          </SearchButton>
        </div>
      </div>
    );
  }
}

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'Tag',
    'A tag to qualify an element.',
    () => <Story />
  )
;
