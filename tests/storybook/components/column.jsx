import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { Column, Drawer, DrawerItem } from 'Components/Columns';
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
          <DrawerItem>
            Drawer item one
          </DrawerItem>
          <DrawerItem count={66}>
            Drawer item two
          </DrawerItem>
        </Drawer>
        <Drawer heading="Drawer Heading 2"  subheading="Subheading 2" count={14}>
          <DrawerItem>
            Drawer item one
          </DrawerItem>
          <DrawerItem count={66}>
            Drawer item two
          </DrawerItem>
          <DrawerItem icon={<Icon name="star" style={{color: "#54c66a"}} />}>
            Drawer item three
          </DrawerItem>
          <DrawerItem icon={<Icon name="star" style={{color: "#f9d6a4"}} />} count={44}>
            Drawer item four
          </DrawerItem>
        </Drawer>
        <Drawer heading="Drawer Heading 3">
          <DrawerItem>
            Drawer item one
          </DrawerItem>
          <DrawerItem count={66}>
            Drawer item two
          </DrawerItem>
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
