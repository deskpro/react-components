import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Avatar from '../../../src/Components/Avatar';

import avatarImage1 from '../static/avatar-1.jpg';
import avatarImage2 from '../static/avatar-2.jpg';
import avatarImage3 from '../static/avatar-3.jpg';
import avatarImage4 from '../static/avatar-4.jpg';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add('Avatar', () => (
    <div>
      <Avatar src={avatarImage1} />
      <Avatar src={avatarImage2} />
      <Avatar src={avatarImage3} />
      <Avatar src={avatarImage4} />
    </div>
  )
)
;
