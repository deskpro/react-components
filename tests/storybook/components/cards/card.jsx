import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Card from 'Components/Cards/Card';
import { List, ListElement } from 'Components/Common';
import Avatar from 'Components/Avatar';

import avatarImage1 from '../../static/avatar-1.jpg';
import avatarImage2 from '../../static/avatar-2.jpg';
import avatarImage3 from '../../static/avatar-3.jpg';
import avatarImage4 from '../../static/avatar-4.jpg';

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('standard', () => (
    <div style={{ width: 200 }}>
      <Card>
        <List>
          <ListElement>
            <strong style={{ display: 'block', marginBottom: 5 }}>
              SSO Cross Browser test
            </strong>
            <div>
              <Avatar src={avatarImage1} style={{ width: 20, height: 20, marginRight: 4 }} />
              <Avatar src={avatarImage2} style={{ width: 20, height: 20, marginRight: 4 }} />
              <Avatar src={avatarImage3} style={{ width: 20, height: 20, marginRight: 4 }} />
            </div>
          </ListElement>
          <ListElement>
            <strong style={{ display: 'block', marginBottom: 5 }}>
              Bug in Chrome
            </strong>
            <div>
              <Avatar src={avatarImage4} style={{ width: 20, height: 20, marginRight: 4 }} />
            </div>
          </ListElement>
          <ListElement>
            <strong>
              Firefox layout on templates
            </strong>
          </ListElement>
          <ListElement>
            <strong>
              Safari update causing issues
            </strong>
          </ListElement>
        </List>
      </Card>
    </div>
  ));

