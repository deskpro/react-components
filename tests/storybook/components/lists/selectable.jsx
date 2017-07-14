import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectableList from 'Components/Common/SelectableList';
import { ListElement } from 'Components/Common';

storiesOf('Lists', module)
  .add('Selectable', () => (
    <div style={{ width: 200 }}>
      <SelectableList>
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
