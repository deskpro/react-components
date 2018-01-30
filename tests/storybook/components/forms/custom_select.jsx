import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import CustomSelect from 'Components/Forms/CustomSelect';
import { List, ListElement } from 'Components/Common';
import { Checkbox } from 'Components/Forms';


const multiOptions = [
  { label: 'Austria', value: 'AT' },
  { label: 'Belgium', value: 'BE' },
  { label: 'Bulgaria', value: 'BG' },
  { label: 'Croatia', value: 'HR' },
  { label: 'Cyprus', value: 'CY' },
  { label: 'Czech Republic', value: 'CZ' },
  { label: 'Denmark', value: 'DK' },
  { label: 'Estonia', value: 'EE' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'Germany', value: 'DE' },
  { label: 'Greece', value: 'GR' },
  { label: 'Hungary', value: 'HU' },
  { label: 'Ireland', value: 'IE' },
  { label: 'Italy', value: 'IT' },
  { label: 'Latvia', value: 'LV' },
  { label: 'Lithuania', value: 'LT' },
  { label: 'Luxembourg', value: 'LU' },
  { label: 'Malta', value: 'MT' },
  { label: 'Netherlands', value: 'NL' },
  { label: 'Poland', value: 'PL' },
  { label: 'Portugal', value: 'PT' },
  { label: 'Romania', value: 'RO' },
  { label: 'Slovakia', value: 'SK' },
  { label: 'Slovenia', value: 'SI' },
  { label: 'Spain', value: 'ES' },
  { label: 'Sweden', value: 'SE' },
  { label: 'United Kingdom', value: 'GB' }
];

class CustomSelectStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.inputRenderer = this.inputRenderer.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(checked, value) {
    const { options } = this.state;
    if (checked) {
      options.push(value);
      this.setState({
        options
      });
    } else {
      this.setState({
        options: options.filter(option => option !== value)
      });
    }
  }

  inputRenderer() {
    const { options } = this.state;
    if (options.length === 0) {
      return 'Please select';
    } else if (options.length <= 3) {
      return options.map(option => multiOptions.find(o => o.value === option)).map(o => o.label).join(', ');
    }
    return `${options.length} countries`;
  }

  render() {
    const { options } = this.state;
    return (
      <CustomSelect
        inputRenderer={this.inputRenderer}
        disabled={boolean('Disabled', false)}
        displayInputWhenOpened={boolean('Display input when opened', false)}
      >
        <List style={{ maxHeight: 200 }}>
          {multiOptions.map(option => (
            <ListElement
              key={option.value}
            >
              <Checkbox
                checked={options.indexOf(option.value) !== -1}
                value={option.value}
                onChange={this.onChange}
              >{option.label}
              </Checkbox>
            </ListElement>
          ))}
        </List>
      </CustomSelect>
    );
  }
}

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .add('CustomSelect', () => (
    <div>
      <CustomSelectStory />
    </div>
  ));

