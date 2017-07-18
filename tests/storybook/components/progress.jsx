import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Progress from 'Components/Progress';
import ProgressBar from 'Components/ProgressBar';

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .add('Progress', () => {
    const percent = number('Percent', 75);
    const sizes = ['small', 'medium', 'large'];

    return (
      <div>
        {sizes.map(size => (
          <div>
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
)
;
