import React from 'react';
import { ListElement } from 'Components/Common';

export const TestSelectable = ({style, ...props}) => {
  if (style === undefined) {
    style = {
      padding: "8px",
      cursor: "pointer",
      borderBottom: "1px solid #707576",
      color: props.selected ? "white" : "black",
      backgroundColor: props.selected ? "#3c82b4" : "transparent"
    };
  }

  return (
    <ListElement {...props} style={style}>
      {props.children}
    </ListElement>
  )
};

export const TestDrawer = ({onClick, heading, opened, children, ...props}) => {
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
