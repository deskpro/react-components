import React from 'react';
import {
  Column,
  DrawerList,
  Drawer,
  ItemList,
  Item,
  FilterIcon,
  ItemFilter
} from 'Components/Columns';
import {
  Heading,
  Subheading,
  List,
  ListElement,
  ListElementGroup,
  ListToggleable,
  QueryableList,
  Popper,
  Scrollbar
} from 'Components/Common';
import * as Forms from 'Components/Forms';
import Avatar from 'Components/Avatar';
import Icon from 'Components/Icon';

import avatarImage1 from '../../static/avatar-1.jpg';
import avatarImage2 from '../../static/avatar-2.jpg';
import avatarImage3 from '../../static/avatar-3.jpg';
import avatarImage4 from '../../static/avatar-4.jpg';

const styles = {
  column: {
    icon: {
      color: '#59a8e2'
    }
  },
  item: {
    iconBlue: {
      color: '#4696DC'
    },
    iconGreen: {
      color: '#54c66a'
    },
    iconYellow: {
      color: '#f9d6a4'
    }
  }
};

class TicketsForm extends React.Component {
  handleChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };

  render() {
    const styles = {
      formGroup: {
        padding: '3px 6px'
      },
      label: {
        display:       'block',
        fontSize:      '11px',
        textTransform: 'uppercase'
      },
      checkboxLabel: {
        display: 'block'
      }
    };

    const groups = {
      '@none':      'None',
      urgency:      'Urgency',
      agent:        'Agent',
      'agent-team': 'Agent Team'
    };

    return (
      <div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            SLA View
          </label>
          <Forms.Checkbox>
            Show SLAs
          </Forms.Checkbox>
        </div>
        <hr />
        <Scrollbar autoHeightMax={100} style={{ height: 110 }}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              Radio Label
            </label>
            {Object.entries(groups).map(pair => (
              <label key={pair[0]} style={styles.checkboxLabel}>
                <input type="radio" name="group" value={pair[0]} onChange={this.handleChange} />
                {pair[1]}
              </label>
            ))}
          </div>
        </Scrollbar>
      </div>
    );
  }
}

export class TestColumn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketsWhereGroup: '@none'
    };
  }

  handleTicketsChange = (ticketsWhereGroup) => {
    this.setState({ ticketsWhereGroup });
    this.filter.close();
  };

  render() {
    return (
      <Column className="dp-column__first" style={{ marginLeft: '100px' }}>
        <Heading>
          <Icon name="envelope-o" style={styles.column.icon} />
          Tickets
        </Heading>
        <DrawerList>
          {this.renderDrawerAgents()}
          {this.renderDrawerSearches()}
          {this.renderDrawerProblems()}
          {this.renderDrawerStars()}
          {this.renderDrawerLabels()}
        </DrawerList>
      </Column>
    );
  }

  renderDrawerAgents() {
    return (
      <Drawer>
        <Heading>
          Awaiting Agent
        </Heading>
        <ItemList>
          <Item count={1}>
            My tickets
          </Item>
          <Item count={0}>
            Tickets I follow
          </Item>
          <Item count={0}>
            Unassigned tickets
          </Item>
          <Item count={99}>
            All tickets
            <ItemFilter ref={ref => this.filter = ref}>
              <TicketsForm onChange={this.handleTicketsChange} />
            </ItemFilter>
          </Item>
          <li>
            <QueryableList whereName={this.state.ticketsWhereGroup}>
              <ListElementGroup name="agent">
                <Item count={9}>
                  <Avatar src={avatarImage1} />
                  Wendy Pride
                </Item>
                <Item count={2}>
                  <Avatar src={avatarImage2} />
                  Bobby Steiner
                </Item>
              </ListElementGroup>
              <ListElementGroup name="urgency">
                Urgency
              </ListElementGroup>
            </QueryableList>
          </li>
        </ItemList>
      </Drawer>
    );
  }

  renderDrawerSearches() {
    return (
      <Drawer>
        <Heading>
          Saved Searches
        </Heading>
        <Subheading>
          Subheading
        </Subheading>
        <ItemList>
          <Item count={2}>
            My weekly mentions
          </Item>
        </ItemList>
      </Drawer>
    );
  }

  renderDrawerProblems() {
    return (
      <Drawer opened={false}>
        <Heading count={2}>
          Problems &amp; Incidents
        </Heading>
        <ItemList>
          <Item count={2}>
            Elastic search indexes
          </Item>
          <Item count={18}>
            Inability to use iOS app
          </Item>
        </ItemList>
      </Drawer>
    );
  }

  renderDrawerStars() {
    return (
      <Drawer opened={false}>
        <Heading>
          My Stars
        </Heading>
        <ItemList>
          <Item count={1}>
            <Icon name="star" style={styles.item.iconBlue} />
            Bug
          </Item>
          <Item count={1}>
            <Icon name="star" style={styles.item.iconGreen} />
            Green
          </Item>
          <Item count={3}>
            <Icon name="star" style={styles.item.iconYellow} />
            Yellow
          </Item>
        </ItemList>
      </Drawer>
    );
  }

  renderDrawerLabels() {
    return (
      <Drawer opened={false}>
        <Heading>
          Labels
        </Heading>
        <ItemList>
          <Item>
            <img src="https://deskpro.com/assets/build/img/deskpro/logo.png" />
          </Item>
        </ItemList>
      </Drawer>
    );
  }
}

export const TestSelectable = ({ style, ...props }) => {
  if (style === undefined) {
    style = {
      padding:         '8px',
      cursor:          'pointer',
      borderBottom:    '1px solid #707576',
      color:           props.selected ? 'white' : 'black',
      backgroundColor: props.selected ? '#3c82b4' : 'transparent'
    };
  }

  return (
    <ListElement {...props} style={style}>
      {props.children}
    </ListElement>
  );
};

export const TestDrawer = ({ onClick, heading, opened, children, ...props }) => {
  const styles = {
    padding:      '8px',
    cursor:       'pointer',
    borderBottom: '1px solid #707576'
  };

  return (
    <ListElement {...props} style={styles}>
      <h3 onClick={onClick}>{heading}</h3>
      <div style={{ display: opened ? 'block' : 'none' }}>
        {children}
      </div>
    </ListElement>
  );
};
