import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { Popper } from 'Components/Common';
import { TestButton } from './fixtures/popper_fixture';

let popper = null;

const targetStyles = {
  width:           '140px',
  height:          '40px',
  top:             '100px',
  left:            '300px',
  padding:         '20px',
  textAlign:       'center',
  border:          '2px dotted black',
  position:        'absolute',
  backgroundColor: 'white'
};

const pStyles = {
  padding: '3px 16px'
};

const placements = [
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end'
];

storiesOf('Popper', module)
  .addDecorator(withKnobs)
  .addWithInfo(
  'Standard',
  'Standard popper usage.',
  () => {
    const opened    = boolean('Opened', true);
    const placement = select('Placement', placements, 'bottom');

    return (
      <div>
        <div id="target" style={targetStyles}>
          <img src="https://deskpro.com/assets/build/img/deskpro/logo.png" />
        </div>
        <Popper
          target="target"
          opened={opened}
          placement={placement}
          offsetX={text('OffsetX', '0px')}
          offsetY={text('OffsetY', '0px')}
        >
          <p style={pStyles}>
            "{placement}"
          </p>
        </Popper>
      </div>
    );
  }
)
  .addWithInfo(
  'Detached',
  'Using the detached property.',
  () => {
    const containerStyles = {
      width:      '400px',
      height:     '150px',
      overflow:   'auto',
      background: '#CCC'
    };
    const ts = Object.assign({}, targetStyles, {
      position:     'relative',
      marginBottom: '50px',
      marginRight:  '50px'
    });

    return (
      <div style={containerStyles}>
        <div id="target" style={ts}>
          <img src="https://deskpro.com/assets/build/img/deskpro/logo.png" />
        </div>
        <Popper
          target="target"
          opened
          eventsEnabled
          detached
          placement="bottom"
        >
          <p style={pStyles}>
            "bottom"
          </p>
        </Popper>
      </div>
    );
  }
)
  .addWithInfo(
  'Button',
  'Using a button to toggle popper visibility.',
  () => {
    const styles = {
      button: {
        fontSize:     '1em',
        color:        '#FFF',
        padding:      '15px 60px',
        zIndex:       '99',
        lineHeight:   '24px',
        background:   '#368ddb',
        borderRadius: '2px',
        border:       '0'
      }
    };

    return (
      <div>
        <TestButton popper={popper} style={styles.button} />
        <Popper
          ref={(p) => { popper = p; }}
          opened={false}
          eventsEnabled
          detached
          placement="bottom"
        >
          <p style={pStyles}>
            Hi, I'm Popper!
          </p>
        </Popper>
      </div>
    );
  }
)
  .addWithInfo(
  'closeOnClickOutside',
  'Close the popper when clicked outside of it.',
  () => {
    const opened = boolean('Opened', true);

    return (
      <div>
        <div id="target" style={targetStyles}>
          <img src="https://deskpro.com/assets/build/img/deskpro/logo.png" />
        </div>
        <Popper
          target="target"
          opened={opened}
          closeOnClickOutside
          placement="bottom"
        >
          <p style={pStyles}>
            I'm a Popper!
          </p>
        </Popper>
      </div>
    );
  }
);
