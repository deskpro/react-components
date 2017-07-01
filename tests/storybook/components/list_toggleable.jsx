import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ListToggleable, ListElement } from 'Components/Common';

const Selectable = (props) => {
  const styles = {
    padding: "8px",
    cursor: "pointer",
    borderBottom: "1px solid #707576",
    color: props.selected ? "white" : "black",
    backgroundColor: props.selected ? "#3c82b4" : "transparent"
  };

  return (
    <ListElement {...props} style={styles}>
      {props.children}
    </ListElement>
  )
};

const Drawer = ({onClick, heading, opened, children, ...props}) => {
  const styles = {
    padding: "8px",
    cursor: "pointer",
    borderBottom: "1px solid #707576"
  };

  return (
    <ListElement {...props} style={styles}>
      <h3 onClick={onClick}>{heading}</h3>
      <div style={{display: opened ? "block":"none"}}>
        {children}
      </div>
    </ListElement>
  )
};

storiesOf('ListToggleable', module)
  .addDecorator(withKnobs)
  .add('Select', () => {
    const styles = {
      width: "200px",
      border: "1px solid #707576",
      borderBottom: "0"
    };

    return (
      <ListToggleable on="click" toggle="selected" style={styles}>
        <Selectable>One</Selectable>
        <Selectable>Two</Selectable>
        <Selectable>Three</Selectable>
      </ListToggleable>
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
      <ListToggleable on="click" toggle="opened" style={styles}>
        <Drawer heading="Drawer 1">One</Drawer>
        <Drawer heading="Drawer 2">Two</Drawer>
        <Drawer heading="Drawer 3">Three</Drawer>
      </ListToggleable>
    )
  })
;
