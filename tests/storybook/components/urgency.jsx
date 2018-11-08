import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Urgency from '../../../src/Components/Urgency';

storiesOf('Urgency', module)
  .addDecorator(withKnobs)
  .add('without shape or size', () => (
    <div>
      <Urgency level={1}>23</Urgency>
      <Urgency level={2}>2</Urgency>
      <Urgency level={3}>9</Urgency>
      <Urgency level={4}>7</Urgency>
      <Urgency level={5}>15</Urgency>
      <Urgency level={6}>31</Urgency>
      <Urgency level={7}>19</Urgency>
      <Urgency level={8}>1</Urgency>
      <Urgency level={9}>6</Urgency>
      <Urgency level={10}>12</Urgency>
    </div>
  ));

