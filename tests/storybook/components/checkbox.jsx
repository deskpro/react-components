import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from 'Components/InputLabel';

storiesOf('Input', module)
  .addWithInfo(
    'Checkbox',
    'This is the basic usage of a input with the label passed as a property.',
    () => (
      <div>
        <h3>Checkbox</h3>
        <div className="dp-input--checkbox">
          <input type="checkbox" value="None" id="checkbox" name="check" />
          <label htmlFor="checkbox" className="dp-input--checkbox__checkbox" />
          <Label htmlFor="checkbox">Checked</Label>
        </div>
        <div className="dp-input--checkbox">
          <input type="checkbox" value="None" id="checkbox_unchecked" name="unchecked" checked={false} />
          <label htmlFor="checkbox_unchecked" className="dp-input--checkbox__checkbox" />
          <Label htnlFor="checkbox_unchecked">Unchecked</Label>
        </div>
      </div>
    ),
  )
;
