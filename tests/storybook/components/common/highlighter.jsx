import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Highlighter from 'Components/Common/Highlighter';

storiesOf('Common', module)
  .addDecorator(withKnobs)
  .add('Highlighter', () => (
    <div>
      <Highlighter highlight={text('Phrase', 'feedback')}>
        Android feedback (Support)
      </Highlighter>
    </div>
  )
)
;
