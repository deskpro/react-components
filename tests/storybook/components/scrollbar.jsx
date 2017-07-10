import React from 'react';
import { storiesOf } from '@storybook/react';
import Scrollbar from '../../../src/Components/Common/Scrollbar';

storiesOf('Scrollbar', module)
  .add('Scrollbar', () => {
    const styles = {
      scrollbar: {
        height: '200px',
        width:  '220px',
        border: '1px solid grey',
      }
    };

    return (
      <Scrollbar style={styles.scrollbar}>
        <p>Line one</p>
        <p>Line two</p>
        <p>Line three</p>
        <p>Line four</p>
        <p>Line five</p>
        <p>Line six</p>
        <p>Line seven</p>
      </Scrollbar>
    );
  }
)
;
