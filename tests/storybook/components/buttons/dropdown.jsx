import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { DropdownButton, ButtonPopper } from '../../../../src/Components/Buttons';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('with dropdown', () => {
    const sizes = ['small', 'medium', 'large'];

    return (
      <div>
        {sizes.map(size => (
          <div style={{ marginBottom: 20 }}>
            <DropdownButton
              type="primary"
              size={size}
              disabled={boolean('Disabled', false)}
            >
              Primary {size}
              <ButtonPopper>
                Hello!
              </ButtonPopper>
            </DropdownButton>
            &nbsp;&nbsp;
            <DropdownButton
              type="secondary"
              size={size}
              disabled={boolean('Disabled', false)}
            >
              Secondary {size}
              <ButtonPopper>
                Hello!
              </ButtonPopper>
            </DropdownButton>
            &nbsp;&nbsp;
            <DropdownButton
              type="cta"
              size={size}
              disabled={boolean('Disabled', false)}
            >
              CTA {size}
              <ButtonPopper>
                Hello!
              </ButtonPopper>
            </DropdownButton>
          </div>
        ))}
      </div>
    );
  });

