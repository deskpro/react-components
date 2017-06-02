import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from 'Components/Button';

storiesOf('Style', module)
  .add(
    'Button', () => <div>
      Button--s <br />
      <Button className="button--s">Small</Button><br /><br />
      Button--m (default)<br />
      <Button>Medium</Button><br /><br />
      Button--l <br />
      <Button className="button--l">Large</Button><br /><br />
      Cta<br />
      <Button className="button--cta">Call to action</Button><br /><br />
      Primary (default)<br />
      <Button>Primary</Button><br /><br />
      Secondary<br />
      <Button className="button--secondary">Secondary</Button><br /><br />
      Disabled<br />
      <Button disabled>Secondary</Button><br /><br />
    </div>
);
