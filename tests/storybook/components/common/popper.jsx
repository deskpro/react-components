import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { Popper } from 'Components/Common';
import { TestButton } from './fixtures';

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

storiesOf('Common', module)
  .addDecorator(withKnobs)
  .addWithInfo(
  'Popper standard',
  'Standard popper usage.',
  () => {
    const opened    = boolean('Opened', true);
    const arrow     = boolean('Arrow', true);
    const placement = select('Placement', Popper.placements, 'bottom');

    return (
      <div>
        <div id="target" style={targetStyles}>
          <img src="https://deskpro.com/assets/build/img/deskpro/logo.png" role="presentation" />
        </div>
        <Popper
          target="target"
          opened={opened}
          arrow={arrow}
          placement={placement}
          offsetX={text('OffsetX', '0px')}
          offsetY={text('OffsetY', '0px')}
        >
          <p style={pStyles}>
            {placement}
          </p>
        </Popper>
      </div>
    );
  }
)
  .addWithInfo(
  'Popper detached',
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
          <img src="https://deskpro.com/assets/build/img/deskpro/logo.png" role="presentation" />
        </div>
        <Popper
          target="target"
          opened
          eventsEnabled
          detached
          placement="bottom"
        >
          <p style={pStyles}>
            bottom
          </p>
        </Popper>
      </div>
    );
  }
)
  .addWithInfo(
  'Popper button',
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
            Hi, I&apos;m Popper!
          </p>
        </Popper>
      </div>
    );
  }
)
  .addWithInfo(
  'Popper closeOnClickOutside',
  'Close the popper when clicked outside of it.',
  () => {
    const opened = boolean('Opened', true);

    return (
      <div>
        <div id="target" style={targetStyles}>
          <img src="https://deskpro.com/assets/build/img/deskpro/logo.png" role="presentation" />
        </div>
        <Popper
          target="target"
          opened={opened}
          closeOnClickOutside
          placement="bottom"
        >
          <p style={pStyles}>
            I&apos;m a Popper!
          </p>
        </Popper>
      </div>
    );
  }
);
