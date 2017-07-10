import React from 'react';
import { storiesOf } from '@storybook/react';
import { Column, DrawerList, Drawer, ItemList, Item, FilterIcon } from 'Components/Columns';
import { Heading, Subheading, List, ListElement, ListElementGroup, ListToggleable, QueryableList } from 'Components/Common';
import Avatar from 'Components/Avatar';
import Icon from 'Components/Icon';

import { TestColumn } from './fixtures/column';
import logoImage from '../static/logo.png';
import avatarImage1 from '../static/avatar-1.jpg';
import avatarImage2 from '../static/avatar-2.jpg';
import avatarImage3 from '../static/avatar-3.jpg';
import avatarImage4 from '../static/avatar-4.jpg';

storiesOf('Columns', module)
  .add('ItemList', () => {
    const styles = {
      column: {
        backgroundColor: '#F4F5F5',
        border:          '1px solid #d4d7d8'
      },
      item: {
        iconBlue: {
          color: '#4696DC'
        },
        iconGreen: {
          color: '#54c66a'
        }
      }
    };

    return (
      <div className="dp-column__first" style={styles.column}>
        <ItemList>
          <Item count={2} label="My weekly mentions" />
          <Item count={99}>
            All tickets
            <FilterIcon />
          </Item>
          <Item count={1}>
            <Icon name="star" style={styles.item.iconBlue} />
            Bug
          </Item>
          <Item count={1}>
            <Icon name="star" style={styles.item.iconGreen} />
            Green
          </Item>
          <Item count={2}>
            Elastic search indexes
          </Item>
          <Item count={18}>
            Inability to use iOS app
          </Item>
          <Item count={3}>
            <Avatar src={avatarImage1} />
            Wendy Pride
          </Item>
          <Item count={4}>
            <Avatar src={avatarImage2} />
            Bob Cooper
          </Item>
        </ItemList>
      </div>
    );
  })
  .add('DrawerList', () => {
    const styles = {
      column: {
        backgroundColor: '#F4F5F5',
        border:          '1px solid #d4d7d8'
      },
      image: {
        margin: '0 12px'
      },
      button: {
        margin:       '0 12px',
        padding:      '10px',
        background:   '#368ddb',
        color:        'rgba(255,255,255,.9)',
        borderRadius: '2px',
        border:       '0'
      },
      input: {
        margin:  '0 12px',
        padding: '10px'
      }
    };

    return (
      <div className="dp-column__first" style={styles.column}>
        <DrawerList>
          <Drawer>
            <Heading icon="heart">
              Awaiting Agent
            </Heading>
            <img src={logoImage} style={styles.image} />
          </Drawer>
          <Drawer>
            <Heading>
              Saved Searches
            </Heading>
            <button style={styles.button}>
              Start your free trail now
            </button>
          </Drawer>
          <Drawer>
            <input type="text" placeholder="No heading..." style={styles.input} />
          </Drawer>
        </DrawerList>
      </div>
    );
  })
  .add('Column', () => (
    <TestColumn />
  )
)
;
