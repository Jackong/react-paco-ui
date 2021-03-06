import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { push } from 'react-router-redux';

import { changeTitle } from '../actions';

import Item from '../components/item';
import Icon from '../components/icon';

const components = [
  {
    name: 'Ad',
    path: 'examples/ad',
  },
  {
    name: 'AgreeMe',
    path: 'examples/agree-me',
  },
  {
    name: 'Agreement',
    path: 'examples/agreement',
  },
  {
    name: 'Alert',
    path: 'examples/alert',
  },
  {
    name: 'Announcement',
    path: 'examples/announcement',
  },
  {
    name: 'Button',
    path: 'examples/button',
  },
  {
    name: 'Checkbox',
    path: 'examples/checkbox',
  },
  {
    name: 'Input',
    path: 'examples/input',
  },
  {
    name: 'Mask',
    path: 'examples/mask',
  },
  {
    name: 'Border',
    path: 'examples/border',
  },
  {
    name: 'List',
    path: 'examples/list',
  },
  {
    name: 'Loading',
    path: 'examples/loading',
  },
  {
    name: 'Modal',
    path: 'examples/modal',
  },
  {
    name: 'Search',
    path: 'examples/search',
  },
  {
    name: 'Share',
    path: 'examples/share',
  },
  {
    name: 'Switch',
    path: 'examples/switch',
  },
  {
    name: 'Tabs',
    path: 'examples/tabs',
  },
  {
    name: 'Toast',
    path: 'examples/toast',
  },
  {
    name: 'Text',
    path: 'examples/text',
  },
  {
    name: 'Card',
    path: 'examples/card',
  },
  {
    name: 'Illustration',
    path: 'examples/illustration',
  },
  {
    name: 'Actionsheet',
    path: 'examples/actionsheet',
  },
  {
    name: 'Result',
    path: 'examples/result',
  },
  {
    name: 'Keyboard',
    path: 'examples/keyboard',
  },
  {
    name: 'Picker',
    path: 'examples/picker',
  },
];

@connect()
export class Home extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  onRowClick(name, path) {
    const { dispatch } = this.props;
    dispatch(push(path));
    dispatch(changeTitle(name));
  }
  render() {
    return (
      <div className={cx('home')}>
        <div>
          {components.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
          }).map(({ name, path }, idx) => (
            <Item
              type="single" key={idx} title={name} icon={<Icon name="arrow-right" />}
              onClick={this.onRowClick.bind(this, name, path)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
