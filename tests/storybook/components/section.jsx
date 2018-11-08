import React from 'react';
import { storiesOf } from '@storybook/react';
import Section from '../../../src/Components/Section';

storiesOf('Section', module)
  .add('Section', () => (
    <div>
      <Section>
        Section without a title
      </Section>
      <Section title="Section title">
        Section with a title
      </Section>
    </div>
  ));

