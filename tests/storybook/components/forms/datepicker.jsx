import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Datepicker, Datetimepicker } from '../../../../src/Components/Forms';

class Story extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      date1: '',
      date2: '31/01/2018',
      date3: '',
      date4: '01/31/2018 12:34'
    };
  }

  handleChange = (value, name) => {
    this.setState({
      [name]: value
    });
    this.props.onChange(value, name);
  };

  render() {
    return (
      <div>
        <h3>Datepicker</h3>
        <Datepicker name="date1" onChange={this.handleChange} onSelect={action('onSelect')} value={this.state.date1} />
        <Datepicker name="date2" onChange={this.handleChange} onSelect={action('onSelect')} value={this.state.date2} />
        <h3>Datetimepicker</h3>
        <Datetimepicker
          name="date3"
          onChange={this.handleChange}
          onSelect={action('onSelect')}
          value={this.state.date3}
        />
        <Datetimepicker
          name="date4"
          locale="en_T1"
          onChange={this.handleChange}
          onSelect={action('onSelect')}
          value={this.state.date4}
        />
      </div>
    );
  }
}

storiesOf('Forms', module)
  .add(
    'Datepicker',
    () => (
      <Story onChange={action('onChange')} />
    )
  );
