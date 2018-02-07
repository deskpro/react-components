/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectMap } from 'utils/objects';
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
import Urgency from 'Components/Urgency';
import Avatar from 'Components/Avatar';
import Icon from 'Components/Icon';
import { objectKeyFilter } from 'utils/objects';

import avatarImage1 from '../../static/avatar-1.jpg';
import avatarImage2 from '../../static/avatar-2.jpg';
import Tag from "../../../../src/Components/Forms/Tag";

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

class Sla extends React.Component {
  static propTypes = {
    level:     PropTypes.oneOf(['passing', 'warning', 'failed']),
    className: '',
    children:  PropTypes.node,
  };
  render() {
    const {
      children, level, className, ...props
    } = this.props;
    return (
      <Forms.Tag
        className={classNames('dp-sla', level, className)}
        editable={false}
        {...objectKeyFilter(props, Sla.propTypes)}
      >
        {children}
      </Forms.Tag>
    );
  }
}

class TicketsForm extends React.Component {
  static propTypes = {
    onChange:    PropTypes.func,
    onSlaChange: PropTypes.func,
    slaValue:    PropTypes.bool,
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
          <Forms.Checkbox onChange={this.props.onSlaChange} checked={this.props.slaValue}>
            Show SLAs
          </Forms.Checkbox>
        </div>
        <hr />
        <Scrollbar autoHeightMax={100} style={{ height: 110 }}>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>
              Group by field
            </label>
            {objectMap(groups, (val, key) => (
              <label key={key} style={formStyles.checkboxLabel}>
                <input
                  type="radio"
                  name="group"
                  value={key}
                  checked={value === key}
                  onChange={this.handleChange}
                />
                {val}
              </label>
            ))}
          </div>
        </Scrollbar>
      </div>
    );
  }
}

export class TestColumn extends React.Component {
  static propTypes = {
    onSelectMode: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      ticketsWhereGroup: localStorage.getItem('column_fixture_tickets_form_value') || '@none',
      slaChecked: false
    };
  }

  handleTicketsChange = (ticketsWhereGroup) => {
    this.setState({ ticketsWhereGroup });
    this.filter.close();
  };

  handleSlaChange = (slaChecked) => {
    this.setState({ slaChecked });
  };

  render() {
    return (
      <Column style={{ width: '220px' }}>
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
    const { onSelectMode } = this.props;
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
          <Item rightTypes={[Sla]}>
            All tickets
            { this.state.slaChecked ?
                [
                  <Sla level="passing" onClick={() => onSelectMode({type: 'all', sla: 'passing'})}>80</Sla>,
                  <Sla level="warning" onClick={() => onSelectMode({type: 'all', sla: 'warning'})}>8</Sla>,
                  <Sla level="failed" onClick={() => onSelectMode({type: 'all', sla: 'failed'})}>11</Sla>,
                ]
              : ''
            }
            <Count>99</Count>
            <ItemFilter ref={(ref) => { this.filter = ref; }}>
              <TicketsForm
                onChange={this.handleTicketsChange}
                onSlaChange={this.handleSlaChange}
                slaValue={this.state.slaChecked}
              />
            </ItemFilter>
          </Item>
          <li>
            <QueryableList whereName={this.state.ticketsWhereGroup}>
              <ListElementGroup name="agent">
                <Item rightTypes={[Sla]}>
                  Wendy Pride
                  { this.state.slaChecked ?
                    [
                      <Sla level="passing" onClick={() => onSelectMode({type: 'agent-1', sla: 'passing'})}>5</Sla>,
                      <Sla level="warning" onClick={() => onSelectMode({type: 'agent-1', sla: 'warning'})}>2</Sla>,
                      <Sla level="failed" onClick={() => onSelectMode({type: 'agent-1', sla: 'failed'})}>2</Sla>,
                    ]
                    : ''
                  }
                  <Count>9</Count>
                  <Avatar src={avatarImage1} />
                </Item>
                <Item rightTypes={[Sla]}>
                  Bobby Steiner
                  { this.state.slaChecked ?
                    [
                      <Sla level="passing" onClick={() => onSelectMode({type: 'agent-2', sla: 'passing'})}>1</Sla>,
                      <Sla level="warning" onClick={() => onSelectMode({type: 'agent-2', sla: 'warning'})}>1</Sla>,
                      <Sla level="failed" onClick={() => onSelectMode({type: 'agent-2', sla: 'failed'})}>0</Sla>,
                    ]
                    : ''
                  }
                  <Count>2</Count>
                  <Avatar src={avatarImage2} />
                </Item>
              </ListElementGroup>
              <ListElementGroup name="urgency">
                <Item style={{ padding: '4px 12px 4px 6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Urgency level={1} onClick={() => onSelectMode({type: 'urgency-1'})}>23</Urgency>
                    <Urgency level={2} onClick={() => onSelectMode({type: 'urgency-2'})}>2</Urgency>
                    <Urgency level={3} onClick={() => onSelectMode({type: 'urgency-3'})}>9</Urgency>
                    <Urgency level={4} onClick={() => onSelectMode({type: 'urgency-4'})}>7</Urgency>
                    <Urgency level={5} onClick={() => onSelectMode({type: 'urgency-5'})}>15</Urgency>
                    <Urgency level={6} onClick={() => onSelectMode({type: 'urgency-6'})}>31</Urgency>
                    <Urgency level={7} onClick={() => onSelectMode({type: 'urgency-7'})}>19</Urgency>
                    <Urgency level={8} onClick={() => onSelectMode({type: 'urgency-8'})}>1</Urgency>
                    <Urgency level={9} onClick={() => onSelectMode({type: 'urgency-9'})}>6</Urgency>
                    <Urgency level={10} onClick={() => onSelectMode({type: 'urgency-10'})}>12</Urgency>
                  </div>
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
