/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { ListElement } from 'Components/Common';

export const TestSelectable = ({ style, selected, children, ...props }) => {
  let styles = null;
  if (style === undefined) {
    styles = {
      padding:         '8px',
      cursor:          'pointer',
      borderBottom:    '1px solid #707576',
      color:           selected ? 'white' : 'black',
      backgroundColor: selected ? '#3c82b4' : 'transparent'
    };
  } else {
    styles = Object.assign({}, style);
  }

  return (
    <ListElement {...props} style={styles}>
      {children}
    </ListElement>
  );
};

TestSelectable.propTypes = {
  style:    PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.node
};

export const TestDrawer = ({ onClick, heading, opened, children, ...props }) => {
  const styles = {
    padding:      '8px',
    cursor:       'pointer',
    borderBottom: '1px solid #707576'
  };

  return (
    <ListElement {...props} style={styles}>
      <h3>
        <div onClick={onClick}>{heading}</div>
      </h3>
      <div style={{ display: opened ? 'block' : 'none' }}>
        {children}
      </div>
    </ListElement>
  );
};

TestDrawer.propTypes = {
  heading:  PropTypes.string,
  opened:   PropTypes.bool,
  children: PropTypes.node,
  onClick:  PropTypes.func
};
