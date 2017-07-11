import React from 'react';
import PropTypes from 'prop-types';
import {
  Column,
  DrawerList,
  Drawer,
  ItemList,
  Item,
  ItemFilter,
  ItemSettings
} from 'Components/Columns';
import {
  Heading,
  Subheading,
  Count,
  ListElement,
  ListElementGroup,
  QueryableList,
  Scrollbar
} from 'Components/Common';
import * as Forms from 'Components/Forms';
import Avatar from 'Components/Avatar';
import Icon from 'Components/Icon';

import avatarImage1 from '../../static/avatar-1.jpg';
import avatarImage2 from '../../static/avatar-2.jpg';

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
  static propTypes = {
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      value: localStorage.getItem('column_fixture_tickets_form_value') || '@none'
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value }, () => {
      if (this.props.onChange) {
        localStorage.setItem('column_fixture_tickets_form_value', this.state.value);
        this.props.onChange(this.state.value);
      }
    });
  };

  render() {
    const formStyles = {
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

    const { value } = this.state;

    return (
      <div>
        <div style={formStyles.formGroup}>
          <label style={styles.label}>
            SLA View
          </label>
          <Forms.Checkbox>
            Show SLAs
          </Forms.Checkbox>
        </div>
        <hr />
        <Scrollbar autoHeightMax={100} style={{ height: 110 }}>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>
              Radio Label
            </label>
            {Object.entries(groups).map(pair => (
              <label key={pair[0]} style={formStyles.checkboxLabel}>
                <input
                  type="radio"
                  name="group"
                  value={pair[0]}
                  checked={value === pair[0]}
                  onChange={this.handleChange}
                />
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
      ticketsWhereGroup: localStorage.getItem('column_fixture_tickets_form_value') || '@none'
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
          Tickets
          <Icon name="envelope-o" style={styles.column.icon} />
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
          <Item>
            My tickets
            <Count>1</Count>
          </Item>
          <Item>
            Tickets I follow
            <Count>0</Count>
          </Item>
          <Item>
            Unassigned tickets
            <Count>0</Count>
          </Item>
          <Item>
            All tickets
            <Count>99</Count>
            <ItemFilter ref={(ref) => { this.filter = ref; }}>
              <TicketsForm onChange={this.handleTicketsChange} />
            </ItemFilter>
          </Item>
          <li>
            <QueryableList whereName={this.state.ticketsWhereGroup}>
              <ListElementGroup name="agent">
                <Item>
                  Wendy Pride
                  <Count>9</Count>
                  <Avatar src={avatarImage1} />
                </Item>
                <Item>
                  Bobby Steiner
                  <Count>2</Count>
                  <Avatar src={avatarImage2} />
                </Item>
              </ListElementGroup>
              <ListElementGroup name="urgency">
                <Item>
                  Urgency
                </Item>
              </ListElementGroup>
              <ListElementGroup name="agent-team">
                <Item>
                  Agent Team
                </Item>
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
          <Item>
            My weekly mentions
            <Count>2</Count>
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
          <Item>
            Elastic search indexes
            <Count>2</Count>
          </Item>
          <Item>
            Inability to use iOS app
            <Count>18</Count>
          </Item>
        </ItemList>
      </Drawer>
    );
  }

  renderDrawerStars() {
    return (
      <Drawer>
        <Heading>
          My Stars
        </Heading>
        <ItemList>
          <Item>
            Bug
            <Count>2</Count>
            <Icon name="star" style={styles.item.iconBlue} />
          </Item>
          <Item>
            Green
            <Icon name="star" style={styles.item.iconGreen} />
            <ItemSettings />
          </Item>
          <Item>
            Yellow
            <Icon name="star" style={styles.item.iconYellow} />
            <ItemSettings />
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
            <img src="https://deskpro.com/assets/build/img/deskpro/logo.png" role="presentation" />
          </Item>
        </ItemList>
      </Drawer>
    );
  }
}

export const TestSelectable = ({ style, selected, children, ...props }) => {
  let listStyles = null;
  if (style === undefined) {
    listStyles = {
      padding:         '8px',
      cursor:          'pointer',
      borderBottom:    '1px solid #707576',
      color:           selected ? 'white' : 'black',
      backgroundColor: selected ? '#3c82b4' : 'transparent'
    };
  } else {
    listStyles = Object.assign({}, style);
  }

  return (
    <ListElement {...props} style={listStyles}>
      {children}
    </ListElement>
  );
};

TestSelectable.propTypes = {
  style:    PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.node
};

export const TestDrawer = ({ onClick, heading, opened, children, ...props }) => {
  const listStyles = {
    padding:      '8px',
    cursor:       'pointer',
    borderBottom: '1px solid #707576'
  };

  return (
    <ListElement {...props} style={listStyles}>
      <h3 onClick={onClick}>
        {heading}
      </h3>
      <div style={{ display: opened ? 'block' : 'none' }}>
        {children}
      </div>
    </ListElement>
  );
};

TestDrawer.propTypes = {
  heading:  PropTypes.string,
  opened:   PropTypes.bool,
  children: PropTypes.node,
  onClick:  PropTypes.func
};
