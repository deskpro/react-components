import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { Popper } from 'Components/Common';

const targetStyles = {
  width           : '140px',
  height          : '40px',
  top             : '100px',
  left            : '300px',
  padding         : '20px',
  textAlign       : 'center',
  border          : '2px dotted black',
  position        : 'absolute',
  backgroundColor : 'white'
};
const popperStyles = {
  color: 'white'
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
    const arrow     = boolean('Arrow', true);
    const placement = select('Placement', placements, 'bottom');

    return (
      <div>
        <div id="target" style={targetStyles}>
          <img src="https://deskpro.com/assets/build/img/deskpro/logo.png" />
        </div>

        <Popper
          target="target"
          opened={opened}
          arrow={arrow}
          placement={placement}
          offsetX={text('OffsetX', '0px')}
          offsetY={text('OffsetY', '0px')}
        >
          <p style={popperStyles}>
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
      width      : '400px',
      height     : '150px',
      overflow   : 'auto',
      background : '#CCC'
    };
    const ts = Object.assign({}, targetStyles, {
      position     : 'relative',
      marginBottom : '50px',
      marginRight  : '50px'
    });

    return (
      <div style={containerStyles}>
        <div id="target" style={ts}>
          <img src="https://deskpro.com/assets/build/img/deskpro/logo.png" />
        </div>

        <Popper
          target="target"
          opened={true}
          arrow={true}
          eventsEnabled={true}
          detached={true}
          placement="bottom"
          >
          <p style={popperStyles}>
            "bottom"
          </p>
        </Popper>
      </div>
    );
  }
)
;
