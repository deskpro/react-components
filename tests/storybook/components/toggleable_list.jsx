import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ToggleableList } from 'Components/Common';
import { TestSelectable, TestDrawer } from './fixtures/column';

storiesOf('ToggleableList', module)
  .addDecorator(withKnobs)
  .add('Select', () => {
    const styles = {
      width: "200px",
      border: "1px solid #707576",
      borderBottom: "0"
    };

    return (
      <ToggleableList on="click" toggle="selected" style={styles}>
        <TestSelectable>One</TestSelectable>
        <TestSelectable>Two</TestSelectable>
        <TestSelectable>Three</TestSelectable>
      </ToggleableList>
    )
  }
  )
  .add('Accordion', () => {
    const styles = {
      width: "200px",
      border: "1px solid #707576",
      borderBottom: "0"
    };

    return (
      <ToggleableList on="click" toggle="opened" style={styles}>
        <TestDrawer heading="Drawer 1">One</TestDrawer>
        <TestDrawer heading="Drawer 2">Two</TestDrawer>
        <TestDrawer heading="Drawer 3">Three</TestDrawer>
      </ToggleableList>
    )
  })
;
