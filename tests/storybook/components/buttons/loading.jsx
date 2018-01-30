import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Button } from 'Components/Buttons';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('loading', () => {
    const sizes = ['small', 'medium', 'large'];

    return (
      <div>
        {sizes.map(size => (
          <div style={{ marginBottom: 20 }}>
            <Button
              type="primary"
              size={size}
              loading
              disabled={boolean('Disabled', false)}
              onClick={action('clicked')}
            >
              Primary {size}
            </Button>
            &nbsp;&nbsp;
            <Button
              type="secondary"
              size={size}
              loading
              disabled={boolean('Disabled', false)}
              onClick={action('clicked')}
            >
              Secondary {size}
            </Button>
            &nbsp;&nbsp;
            <Button
              type="cta"
              size={size}
              loading
              disabled={boolean('Disabled', false)}
              onClick={action('clicked')}
            >
              CTA {size}
            </Button>
          </div>
        ))}
      </div>
    );
  });
