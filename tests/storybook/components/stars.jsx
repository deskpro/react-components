import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Stars from '../../../src/Components/Stars';

storiesOf('Stars', module)
  .add('standard', () => (
    <div>
      <Stars value={0.5} onClick={action('onClick')} />
      <br />
      <Stars value={1} onClick={action('onClick')} />
      <br />
      <Stars value={1.5} onClick={action('onClick')} />
      <br />
      <Stars value={2} onClick={action('onClick')} />
      <br />
      <Stars value={2.5} onClick={action('onClick')} />
      <br />
      <Stars value={3} onClick={action('onClick')} />
      <br />
      <Stars value={3.5} onClick={action('onClick')} />
      <br />
      <Stars value={4} onClick={action('onClick')} />
      <br />
      <Stars value={4.5} onClick={action('onClick')} />
      <br />
      <Stars value={5} onClick={action('onClick')} />
    </div>
  ));

