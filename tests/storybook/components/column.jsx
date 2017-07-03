import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { Column, Drawer, Item } from 'Components/Columns';
import { List, ListElement, ListToggleable } from 'Components/Common';
import Icon from 'Components/Icon';
import { TestSelectable, TestDrawer } from './fixtures/column';

storiesOf('Columns', module)
  .addDecorator(withKnobs)
  .addWithInfo(
  'Column',
  `
    Standard usage of the Column and ColumnDrawer components.
  `,
  () => {
    const iconName  = select('Icon', ['envelope-o', 'bug', 'star-o', 'cog'], 'envelope-o');
    const iconHead  = <Icon name={iconName} style={{color: "#59a8e2"}} />;
    const accordion = boolean('Accordion', false);
    const heading   = text('Heading', 'Column Heading');

    return (
      <Column
        icon={iconHead}
        heading={heading}
        accordion={accordion}
        className="dp-column__first"
        >
        <Drawer heading="Drawer Heading 1" subheading="Subheading 1">
          <Item>
            Drawer item one
          </Item>
          <Item count={66}>
            Drawer item two
          </Item>
        </Drawer>
        <Drawer heading="Drawer Heading 2"  subheading="Subheading 2" count={14}>
          <Item>
            Drawer item one
          </Item>
          <Item count={66}>
            Drawer item two
          </Item>
          <Item icon={<Icon name="star" style={{color: "#54c66a"}} />}>
            Drawer item three
          </Item>
          <Item icon={<Icon name="star" style={{color: "#f9d6a4"}} />} count={44}>
            Drawer item four
          </Item>
        </Drawer>
        <Drawer heading="Drawer Heading 3">
          <Item>
            Drawer item one
          </Item>
          <Item count={66}>
            Drawer item two
          </Item>
        </Drawer>
        <Drawer heading="Drawer Heading 4">
          <ListElement>
            <img src="https://deskpro.com/assets/build/img/deskpro/logo.png"/>
          </ListElement>
        </Drawer>
        <Drawer heading="Drawer Heading 4"/>
      </Column>
    )
  }
)
;
