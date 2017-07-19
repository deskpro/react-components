import React from 'react';
import { storiesOf } from '@storybook/react';
import { objectForEach } from 'utils/objects';
import { numberRandom } from 'utils/numbers';
import { TranslateButton } from 'Components/Buttons';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first:  numberRandom(0, 12),
      second: numberRandom(0, 12),
      third:  numberRandom(0, 12)
    };

    this.intervals = { first: null, second: null, third: null };
  }

  componentDidMount() {
    objectForEach(this.intervals, (val, key) => {
      this.intervals[key] = setInterval(() => {
        let count = this.state.first + 1;
        if (count > 12) {
          count = 0;
        }
        this.setState({ [key]: count });
      }, numberRandom(500, 1000));
    });
  }

  componentWillUnmount() {
    objectForEach(this.intervals, (val, key) => {
      clearInterval(this.intervals[key]);
    });
  }

  render() {
    const sizes = ['small', 'medium', 'large'];
    const { first, second, third } = this.state;

    return (
      <div>
        {sizes.map(size => (
          <div key={size} style={{ marginBottom: 10 }}>
            <TranslateButton percent={(first / 12) * 100} size={size}>
              {first}/12
            </TranslateButton>
            &nbsp;&nbsp;
            <TranslateButton percent={(second / 12) * 100} size={size}>
              {second}/12
            </TranslateButton>
            &nbsp;&nbsp;
            <TranslateButton percent={(third / 12) * 100} size={size}>
              {third}/12
            </TranslateButton>
          </div>
        ))}
      </div>
    );
  }
}

storiesOf('Buttons', module)
  .add('translate', () => <Story />
);
