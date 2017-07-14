import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import ${classname} from 'Components/${namespace}/${classname}';

storiesOf('${classname}', module)
  .addDecorator(withKnobs)
  .add('${classname}', () => (
    <div>
      <${classname} />
    </div>
  )
)
;
