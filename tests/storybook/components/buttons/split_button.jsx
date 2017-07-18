import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { SplitButton, SplitPopper } from 'Components/Buttons';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('split', () => {
    const sizes = ['small', 'medium', 'large'];

    return (
      <div>
        {sizes.map(size => (
          <div style={{ marginBottom: 20 }}>
            <SplitButton
              type="primary"
              size={size}
              disabled={boolean('Disabled', false)}
              onClick={action('clicked')}
            >
              Primary {size}
              <SplitPopper>
                Hello!
              </SplitPopper>
            </SplitButton>
            &nbsp;&nbsp;
            <SplitButton
              type="secondary"
              size={size}
              disabled={boolean('Disabled', false)}
              onClick={action('clicked')}
            >
              Secondary {size}
              <SplitPopper>
                Hello!
              </SplitPopper>
            </SplitButton>
            &nbsp;&nbsp;
            <SplitButton
              type="cta"
              size={size}
              disabled={boolean('Disabled', false)}
              onClick={action('clicked')}
            >
              CTA {size}
              <SplitPopper>
                Hello!
              </SplitPopper>
            </SplitButton>
          </div>
        ))}
      </div>
    );
  }
)
;
