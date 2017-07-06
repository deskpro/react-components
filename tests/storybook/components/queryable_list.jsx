import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { QueryableList, List, ListElement, ListElementGroup } from 'Components/Common';

storiesOf('QueryableList', module)
  .addDecorator(withKnobs)
  .add('QueryableList', () => {
    const whereName = select(
      'WhereName',
      ['@all', '@none', 'agent', 'department', 'product', 'integrations', 'feedback'],
      '@all'
    );

    return (
      <QueryableList whereName={whereName}>
        <ListElement name="integrations">
          Integrations
        </ListElement>
        <ListElement name="feedback">
          Feedback
        </ListElement>
        <ListElementGroup name="agent">
          <ListElement>
            Wendy Pride
          </ListElement>
          <ListElement>
            Bobby Steiner
          </ListElement>
        </ListElementGroup>
        <ListElementGroup name="department">
          <ListElement>
            Sales
          </ListElement>
          <ListElement>
            Marketing
          </ListElement>
        </ListElementGroup>
        <ListElementGroup name="product">
          <ListElement>
            DeskPRO Cloud
          </ListElement>
          <ListElement>
            DeskPRO On-Premise
          </ListElement>
        </ListElementGroup>
      </QueryableList>
    )
  }
)
;
