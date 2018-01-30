import React from 'react';
import { storiesOf } from '@storybook/react';
import Progress from 'Components/Progress';
import ProgressBar from 'Components/ProgressBar';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 10
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let percent = this.state.percent;
      percent += 1;
      if (percent > 100) {
        percent = 0;
      }
      this.setState({ percent });
    }, 100);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  render() {
    const { percent } = this.state;
    const sizes = ['small', 'medium', 'large'];

    return (
      <div style={{ width: '25%' }}>
        {sizes.map(size => (
          <div key={size}>
            <Progress size={size} type="primary" style={{ margin: 10, border: '1px solid #ccc' }}>
              <ProgressBar percent={percent}>
                {size === 'large' ? `${percent}%` : null}
              </ProgressBar>
            </Progress>
            <Progress size={size} type="cta" style={{ margin: 10, border: '1px solid #ccc' }}>
              <ProgressBar percent={percent}>
                {size === 'large' ? `${percent}%` : null}
              </ProgressBar>
            </Progress>
          </div>
        ))}
      </div>
    );
  }
}

storiesOf('Progress', module)
  .add('Progress', () => <Story />);
