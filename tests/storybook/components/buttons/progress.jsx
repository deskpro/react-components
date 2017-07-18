import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ProgressButton } from 'Components/Buttons';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('with progress bar', () => {
    const sizes = ['small', 'medium', 'large'];

    return (
      <div>
        {sizes.map(size => (
          <div style={{ marginBottom: 10 }}>
            <ProgressButton percent={50} size={size}>
              6/12
            </ProgressButton>
            &nbsp;&nbsp;
            <ProgressButton percent={75} size={size}>
              9/12
            </ProgressButton>
            &nbsp;&nbsp;
            <ProgressButton percent={100} size={size}>
              12/12
            </ProgressButton>
          </div>
        ))}
      </div>
    );
  }
)
;
