import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Pagination from 'Components/Buttons/Pagination';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Pagination', () => (
    <div>
      <Pagination
        pageCount={2}
        activePage={1}
      />

      <Pagination
        pageCount={3}
        activePage={1}
      />

      <Pagination
        pageCount={3}
        activePage={2}
      />

      <Pagination
        pageCount={7}
        activePage={2}
      />

      <Pagination
        pageCount={9}
        activePage={7}
      />

      <Pagination
        pageCount={13}
        activePage={7}
      />

      <Pagination
        pageCount={50}
        activePage={7}
      />

      <Pagination
        pageCount={93070}
        activePage={12978}
      />

      <Pagination
        pageCount={93070}
        activePage={93070}
      />

      <Pagination
        pageCount={7}
        activePage={7}
      />

    </div>
  )
)
;
