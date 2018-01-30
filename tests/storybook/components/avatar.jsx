import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from 'Components/Avatar';

import avatarImage1 from '../static/avatar-1.jpg';
import avatarImage2 from '../static/avatar-2.jpg';
import avatarImage3 from '../static/avatar-3.jpg';
import avatarImage4 from '../static/avatar-4.jpg';

storiesOf('Avatar', module)
  .add('Avatar', () => (
    <div>
      <div style={{ marginBottom: 10 }}>
        <h3>Small</h3>
        <Avatar src={avatarImage1} size="small" />
        <Avatar src={avatarImage2} size="small" />
        <Avatar src={avatarImage3} size="small" />
        <Avatar src={avatarImage4} size="small" />
      </div>
      <div style={{ marginBottom: 10 }}>
        <h3>Medium</h3>
        <Avatar src={avatarImage1} size="medium" />
        <Avatar src={avatarImage2} size="medium" />
        <Avatar src={avatarImage3} size="medium" />
        <Avatar src={avatarImage4} size="medium" />
      </div>
      <div style={{ marginBottom: 10 }}>
        <h3>Large</h3>
        <Avatar src={avatarImage1} size="large" />
        <Avatar src={avatarImage2} size="large" />
        <Avatar src={avatarImage3} size="large" />
        <Avatar src={avatarImage4} size="large" />
      </div>
      <div>
        <h3>X-Large</h3>
        <Avatar src={avatarImage1} size="xlarge" />
        <Avatar src={avatarImage2} size="xlarge" />
        <Avatar src={avatarImage3} size="xlarge" />
        <Avatar src={avatarImage4} size="xlarge" />
      </div>
    </div>
  ));

