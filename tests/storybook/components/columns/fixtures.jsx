/* eslint-disable */
import './agent_filter.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/fontawesome-free-solid/index';
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
  List,
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
import { Button } from "../../../../src/Components";

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
  },
  scollbar: {
    height: '300px'
  }
};

const labels = [
  'Android Mobile App',
  'Bogus',
  'Bug fixed',
  'Cannot Reproduce',
  'Case Study',
  'Churn',
  'Beta tester',
  'Click Jacking',
  'cloud-ips',
  'Consultation Session',
  'Custom fields',
  'Capterra',
  'Did it Work',
  'dog house',
  'Converted',
  'Custom work',
  'label',
  'Demo',
  'Integrations',
  'HTML',
  'Cloud',
  'Email',
  'Editor',
  'Enumeration',
  'Games',
  'iPad',
  'Fixed',
  'Mobile'
];

class LabelTitle extends React.Component {
  static propTypes = {
    children:  PropTypes.node,
  };
  render() {
    const { children, ...props } = this.props;
    return (
      <div style={{minWidth: '8px'}}
        {...objectKeyFilter(props, LabelTitle.propTypes)}
      >
        {children}
      </div>
    );
  }
}

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
        {...objectKeyFilter(props, Sla.propTypes)}
      >
        {children}
      </Forms.Tag>
    );
  }
}

class Settings extends React.Component {
  render() {
    return (
      <FontAwesomeIcon
        className="dp-settings"
        icon={faCog}
      />
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
      slaChecked:        false,
      mode:              null,
    };
  }

  handleTicketsChange = (ticketsWhereGroup) => {
    this.setState({ ticketsWhereGroup });
    this.filter.close();
  };

  handleSlaChange = (slaChecked) => {
    this.setState({ slaChecked });
  };

  onSelectMode = (mode) => {
    this.setState({ mode });
    this.props.onSelectMode(mode);
  };

  sortLabels = () => {
    const groups = {};
    for(const label of labels) {
      const initial = label.charAt(0).toUpperCase();
      if (!groups[initial]) {
        groups[initial] = [];
      }
      groups[initial].push(label.replace(/ /, ' '));
    }
    for (let i in groups) {
      groups[i].sort();
    }
    return groups;
  };

  renderDrawerAgents() {
    const { onSelectMode } = this.props;
    return (
      <Drawer>
        <Heading>
          Awaiting Agent
        </Heading>
        <ItemList>
          <Item onSelect={() => this.onSelectMode({type: 'my-tickets'})}>
            My tickets
            <Count>1</Count>
          </Item>
          <Item onSelect={() => this.onSelectMode({type: 'followed-tickets'})}>
            Tickets I follow
            <Count>0</Count>
          </Item>
          <Item onSelect={() => this.onSelectMode({type: 'unassigned-tickets'})}>
            Unassigned tickets
            <Count>0</Count>
          </Item>
          <Item rightTypes={[Sla]} onClick={() => this.onSelectMode({type: 'all-tickets'})}>
            All tickets
            { this.state.slaChecked ?
                [
                  <Sla level="passing" onClick={() => this.onSelectMode({type: 'all', sla: 'passing'})}>80</Sla>,
                  <Sla level="warning" onClick={() => this.onSelectMode({type: 'all', sla: 'warning'})}>8</Sla>,
                  <Sla level="failed" onClick={() => this.onSelectMode({type: 'all', sla: 'failed'})}>11</Sla>,
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
                <Item rightTypes={[Sla]} onClick={() => this.onSelectMode({type: 'agent-1'})}>
                  Wendy Pride
                  { this.state.slaChecked ?
                    [
                      <Sla level="passing" onClick={() => this.onSelectMode({type: 'agent-1', sla: 'passing'})}>5</Sla>,
                      <Sla level="warning" onClick={() => this.onSelectMode({type: 'agent-1', sla: 'warning'})}>2</Sla>,
                      <Sla level="failed" onClick={() => this.onSelectMode({type: 'agent-1', sla: 'failed'})}>2</Sla>,
                    ]
                    : ''
                  }
                  <Count>9</Count>
                  <Avatar src={avatarImage1} />
                </Item>
                <Item rightTypes={[Sla]} onClick={() => this.onSelectMode({type: 'agent-2'})}>
                  Bobby Steiner
                  { this.state.slaChecked ?
                    [
                      <Sla level="passing" onClick={() => this.onSelectMode({type: 'agent-2', sla: 'passing'})}>1</Sla>,
                      <Sla level="warning" onClick={() => this.onSelectMode({type: 'agent-2', sla: 'warning'})}>1</Sla>,
                      <Sla level="failed" onClick={() => this.onSelectMode({type: 'agent-2', sla: 'failed'})}>0</Sla>,
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
                    <Urgency level={1} onClick={() => this.onSelectMode({type: 'urgency-1'})}>23</Urgency>
                    <Urgency level={2} onClick={() => this.onSelectMode({type: 'urgency-2'})}>2</Urgency>
                    <Urgency level={3} onClick={() => this.onSelectMode({type: 'urgency-3'})}>9</Urgency>
                    <Urgency level={4} onClick={() => this.onSelectMode({type: 'urgency-4'})}>7</Urgency>
                    <Urgency level={5} onClick={() => this.onSelectMode({type: 'urgency-5'})}>15</Urgency>
                    <Urgency level={6} onClick={() => this.onSelectMode({type: 'urgency-6'})}>31</Urgency>
                    <Urgency level={7} onClick={() => this.onSelectMode({type: 'urgency-7'})}>19</Urgency>
                    <Urgency level={8} onClick={() => this.onSelectMode({type: 'urgency-8'})}>1</Urgency>
                    <Urgency level={9} onClick={() => this.onSelectMode({type: 'urgency-9'})}>6</Urgency>
                    <Urgency level={10} onClick={() => this.onSelectMode({type: 'urgency-10'})}>12</Urgency>
                  </div>
                </Item>
              </ListElementGroup>
              <ListElementGroup name="agent-team">
                <Item onClick={() => this.onSelectMode({type: 'team', team: 1})}>
                  Support
                </Item>
                <Item onClick={() => this.onSelectMode({type: 'team', team: 2})}>
                  Sales
                </Item>
              </ListElementGroup>
            </QueryableList>
          </li>
        </ItemList>
      </Drawer>
    );
  }

  renderDrawerFilters() {
    return (
      <Drawer opened={true}>
        <Heading>
          Filters
        </Heading>
        <ItemList>
          <Item rightTypes={[Settings]} onSelect={() => this.onSelectMode({type: 'filter', filter: 1})}>
            Demo
            <Settings />
            <Count>1</Count>
          </Item>
          <Item rightTypes={[Settings]} onSelect={() => this.onSelectMode({type: 'filter', filter: 2})}>
            Pricing
            <Settings />
            <Count>3</Count>
          </Item>
          <ListElement className="dp-drawer-item">
            <Button size="s" type="secondary">+ Add</Button>
          </ListElement>
        </ItemList>
      </Drawer>
    );
  }

  renderDrawerSearches() {
    return (
      <Drawer opened={false}>
        <Heading>
          Saved Searches
        </Heading>
        <ItemList>
          <Item onSelect={() => this.onSelectMode({type: 'search', search: 1})}>
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
          <Item onSelect={() => this.onSelectMode({type: 'problem', problem: 1})}>
            Elastic search indexes
            <Count>2</Count>
          </Item>
          <Item onSelect={() => this.onSelectMode({type: 'problem', problem: 2})}>
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
          <Item onSelect={() => this.onSelectMode({type: 'star', star: 1})}>
            Bug
            <Count>2</Count>
            <Icon name="star" style={styles.item.iconBlue} />
          </Item>
          <Item onSelect={() => this.onSelectMode({type: 'star', star: 2})}>
            Green
            <Icon name="star" style={styles.item.iconGreen} />
            <ItemSettings />
          </Item>
          <Item onSelect={() => this.onSelectMode({type: 'star', star: 3})}>
            Yellow
            <Icon name="star" style={styles.item.iconYellow} />
            <ItemSettings />
          </Item>
          <ListElement className="dp-drawer-item">
            <Button size="s" type="secondary">+ Add new star</Button>
          </ListElement>
        </ItemList>
      </Drawer>
    );
  }

  renderDrawerLabels() {
    const groups = this.sortLabels();
    return (
      <Drawer opened={false}>
        <Heading>
          Labels
        </Heading>
        <Scrollbar style={styles.scrollbar}>
          <List className="dp-drawer-item-list dp-labels">
            {Object.keys(groups).map((key) =>
              <Item key={key} leftTypes={[LabelTitle]}>
                <LabelTitle>{key}</LabelTitle>
                <div className="dp-label-list">
                  {groups[key].map((label) =>
                    [
                      <Forms.Tag
                        key={label}
                        className={classNames('dp-label', {enabled: this.state.mode && label === this.state.mode.label})}
                        onClick={() => this.onSelectMode({type: 'label', label})}
                      >
                        {label}
                      </Forms.Tag>
                    , ' ']
                  )}
                </div>
              </Item>
            )}
          </List>
        </Scrollbar>
      </Drawer>
    );
  }

  render() {
    return (
      <Column style={{ width: '220px' }}>
        <Heading>
          <Icon name="envelope-o" style={styles.column.icon} />
          Tickets
        </Heading>
        <DrawerList>
          {this.renderDrawerAgents()}
          {this.renderDrawerFilters()}
          {this.renderDrawerSearches()}
          {this.renderDrawerProblems()}
          {this.renderDrawerStars()}
          {this.renderDrawerLabels()}
        </DrawerList>
      </Column>
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
