import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Avatar from 'Components/Avatar';
import Icon from 'Components/Icon';
import { DrawerList, Drawer, ItemList, Item } from 'Components/Columns';
import { Heading, Count } from 'Components/Common';

import { TestColumn } from './fixtures';
import logoImage from '../../static/logo.png';
import avatarImage1 from '../../static/avatar-1.jpg';
import avatarImage2 from '../../static/avatar-2.jpg';

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
          <Item>
            My weekly mentions
            <Count>2</Count>
          </Item>
          <Item>
            All tickets
            <Count>99</Count>
          </Item>
          <Item>
            <Icon name="star" style={styles.item.iconBlue} />
            <Count>1</Count>
            Bug
          </Item>
          <Item>
            <Icon name="star" style={styles.item.iconGreen} />
            <Count>1</Count>
            Green
          </Item>
          <Item>
            Elastic search indexes
            <Count>2</Count>
          </Item>
          <Item>
            Inability to use iOS app
            <Count>18</Count>
          </Item>
          <Item >
            <Avatar src={avatarImage1} />
            <Count>3</Count>
            Wendy Pride
          </Item>
          <Item>
            <Avatar src={avatarImage2} />
            <Count>4</Count>
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
        margin: '0 12px',
        width:  '195px'
      },
      button: {
        margin:       '0 12px 6px 12px',
        padding:      '10px',
        background:   '#368ddb',
        color:        'rgba(255,255,255,.9)',
        borderRadius: '2px',
        border:       '0'
      },
      input: {
        margin:  '0 12px 6px 12px',
        padding: '10px'
      }
    };

    return (
      <div style={styles.column}>
        <DrawerList>
          <Drawer>
            <Heading icon="heart">
              Awaiting Agent
            </Heading>
            <img src={logoImage} style={styles.image} alt="Logo" />
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
    <TestColumn onSelectMode={action('Select Mode')} />
  ));

