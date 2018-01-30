import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import TextBadge from 'Components/Badges/TextBadge';

storiesOf('Badges', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <div>
      <TextBadge>Default</TextBadge>
      &nbsp;
      <TextBadge type="success">Success</TextBadge>
      &nbsp;
      <TextBadge type="info">Info</TextBadge>
      &nbsp;
      <TextBadge type="warning">Warning</TextBadge>
      &nbsp;
      <TextBadge type="danger">Danger</TextBadge>
      &nbsp;
      <TextBadge type="success">Super looooong text</TextBadge>
    </div>
  ));

