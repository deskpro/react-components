import React from 'react';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import IconBadge from '../../../../src/Components/Badges/IconBadge';
import Icon from '../../../../src/Components/Icon';

storiesOf('Badges', module)
  .addDecorator(withKnobs)
  .add('with icon', () => (
    <div>
      <IconBadge icon={faEnvelope}>
        1
      </IconBadge>
      &nbsp;&nbsp;&nbsp;
      <IconBadge icon={faEnvelope} type="success">
        12
      </IconBadge>
      &nbsp;&nbsp;&nbsp;
      <IconBadge icon={<Icon name={faEnvelope} size="large" />} type="info">
        12
      </IconBadge>
      &nbsp;&nbsp;&nbsp;
      <IconBadge icon={faEnvelope} type="warning" iconSize="large">
        50
      </IconBadge>
      &nbsp;&nbsp;&nbsp;
      <IconBadge icon={<Icon name={faEnvelope} size="large" />} type="danger">
        100
      </IconBadge>
    </div>
  ));

