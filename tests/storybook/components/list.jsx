import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { List, ListElement } from 'Components/Common';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'List',
    'A list of elements.',
    () => (
      <div>
        <h3>List</h3>
        <List>
          <ListElement>
            Agents
          </ListElement>
          <ListElement>
            DeskPRO Cloud
          </ListElement>
          <ListElement>
            Docs
          </ListElement>
          <ListElement>
            Features
          </ListElement>
          <ListElement>
            Feedback
          </ListElement>
          <ListElement>
            General
            <List>
              <ListElement>
                Integrations
              </ListElement>
              <ListElement>
                Post Sales
              </ListElement>
              <ListElement>
                Reporting
              </ListElement>
            </List>
          </ListElement>
          <ListElement>
            Resellers
          </ListElement>
          <ListElement>
            Sales
          </ListElement>
          <ListElement>
            Security reports
          </ListElement>
        </List>
        <br />
      </div>
    ),
  )
;
