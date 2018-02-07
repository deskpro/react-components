import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs';
import { List, ListElement, ListElementGroup, QueryableList, ToggleableList } from 'Components/Common';
import { TestSelectable, TestDrawer } from './fixtures';

storiesOf('Lists', module)
  .addDecorator(withKnobs)
  .add(
    'Standard',
    withInfo('A standard list of elements.')(
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
      )
    )
  )
  .add('Queryable', () => {
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
            (agent) Wendy Pride
          </ListElement>
          <ListElement>
            (agent) Bobby Steiner
          </ListElement>
        </ListElementGroup>
        <ListElementGroup name="department">
          <ListElement>
            (department) Sales
          </ListElement>
          <ListElement>
            (department) Marketing
          </ListElement>
        </ListElementGroup>
        <ListElementGroup name="product">
          <ListElement>
            (product) DeskPRO Cloud
          </ListElement>
          <ListElement>
            (product) DeskPRO On-Premise
          </ListElement>
        </ListElementGroup>
      </QueryableList>
    );
  })
  .add('Toggleable Select', () => {
    const styles = {
      width:        '200px',
      border:       '1px solid #707576',
      borderBottom: '0'
    };

    return (
      <ToggleableList on="click" toggle="selected" style={styles}>
        <TestSelectable>One</TestSelectable>
        <TestSelectable>Two</TestSelectable>
        <TestSelectable>Three</TestSelectable>
      </ToggleableList>
    );
  })
  .add('Toggleable Accordion', () => {
    const styles = {
      width:        '200px',
      border:       '1px solid #707576',
      borderBottom: '0'
    };

    return (
      <ToggleableList on="click" toggle="opened" style={styles}>
        <TestDrawer heading="Drawer 1">One</TestDrawer>
        <TestDrawer heading="Drawer 2">Two</TestDrawer>
        <TestDrawer heading="Drawer 3">Three</TestDrawer>
      </ToggleableList>
    );
  })
  .add('Toggleable WhenType', () => {
    const styles = {
      list: {
        width:        '200px',
        border:       '1px solid #707576',
        borderBottom: '0'
      },
      li: {
        padding:      '8px',
        cursor:       'pointer',
        borderBottom: '1px solid #707576',
        color:        'black'
      }
    };

    return (
      <ToggleableList on="click" toggle="selected" whenType={TestSelectable} style={styles.list}>
        <TestSelectable>One</TestSelectable>
        <li style={styles.li}>Two (No Select)</li>
        <TestSelectable>Three</TestSelectable>
        <TestSelectable>Four</TestSelectable>
      </ToggleableList>
    );
  });

