import React from 'react';
import { storiesOf, action } from '@storybook/react';
import SelectableList from 'Components/Common/SelectableList';
import { ListElement } from 'Components/Common';

storiesOf('Lists', module)
  .add('Selectable', () => (
    <div style={{ width: 200 }}>
      <SelectableList onSelect={action('selected')} onChange={action('changed')}>
        <ListElement>Android feedback</ListElement>
        <ListElement>Customer service feedback</ListElement>
        <ListElement>E-commerce feedback</ListElement>
        <ListElement>Feedback (Sales)</ListElement>
        <ListElement>Feedback (Support)</ListElement>
      </SelectableList>
    </div>
  )
)
;
