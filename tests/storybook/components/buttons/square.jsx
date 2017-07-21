import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'Components/Buttons';
import Icon from 'Components/Icon';

storiesOf('Buttons', module)
  .add('with shape square', () => (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Button shape="square" type="primary" size="small">
          <Icon name="plus" />
        </Button>&nbsp;
        <Button shape="square" type="primary" size="medium">
          <Icon name="plus" />
        </Button>&nbsp;
        <Button shape="square" type="primary" size="large">
          <Icon name="plus" />
        </Button>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Button shape="square" type="secondary" size="small">
          <Icon name="search" />
        </Button>&nbsp;
        <Button shape="square" type="secondary" size="medium">
          <Icon name="search" />
        </Button>&nbsp;
        <Button shape="square" type="secondary" size="large">
          <Icon name="search" />
        </Button>
      </div>
      <div>
        <Button shape="square" type="cta" size="small">
          <Icon name="search" />
        </Button>&nbsp;
        <Button shape="square" type="cta" size="medium">
          <Icon name="search" />
        </Button>&nbsp;
        <Button shape="square" type="cta" size="large">
          <Icon name="search" />
        </Button>
      </div>
    </div>
  )
)
;
