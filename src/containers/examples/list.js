import React from 'react';

import Item from '../../components/item';
import List from '../../components/list';
import Switch from '../../components/switch';
import Checkbox from '../../components/checkbox';
import Tab from '../../components/tab';
import Tabs from '../../components/tabs';
import Icon from '../../components/icon';
import Badge from '../../components/badge';

const tabs = [
  {
    name: '单行列表',
    type: 'single',
  },
  {
    name: '双行列表',
    type: 'double',
  },
];

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'single',
    };
  }
  onClick(active) {
    this.setState({ active });
  }
  single(type) {
    return (
      <div>
        <br />
        <Item type={type} title="标题文字" description="内容内容" />
        <br />
        <Item
          type={type} title="标题文字" description="内容内容"
          icon={<Icon name="arrow-right" />} badge={<Badge type="small" />}
        />
        <br />
        <Item
          type={type} title="标题文字"
          icon={<Icon name="arrow-right" />} badge={<Badge type="flag">new</Badge>}
        />
        <br />
        <Item type={type} title="标题文字" icon={<Switch isOpen />} />
        <br />
        <List>
          <Item type={type} title="标题文字" description="内容内容" />
          <Item type={type} title="标题文字" description="内容内容" icon={<Icon name="arrow-right" />} />
          <Item type={type} title="标题文字" icon={<Icon name="arrow-right" />} />
          <Item type={type} title="标题文字" description="内容内容" icon={<Checkbox checked />} />
        </List>
        <br />
        <List>
          <Item type={type} title="标题文字" description="内容内容" thumbnail="http://placehold.it/29x29/1cabeb/ffffff?text=PACO-UI" />
          <Item type={type} title="标题文字" description="内容内容" thumbnail="http://placehold.it/29x29/1cabeb/ffffff?text=PACO-UI" icon={<Icon name="arrow-right" />} />
          <Item type={type} title="标题文字" thumbnail="http://placehold.it/29x29/1cabeb/ffffff?text=PACO-UI" icon={<Icon name="arrow-right" />} />
        </List>
      </div>
    );
  }
  double(type) {
    return (
      <div>
        <br />
        <Item type={type} title="标题文字" description="内容内容" />
        <br />
        <Item type={type} title="标题文字" description="内容内容" icon={<Icon name="arrow-right" />} />
        <br />
        <List>
          <Item type={type} title="标题文字" description="内容内容" />
          <Item type={type} title="标题文字" description="内容内容" icon={<Icon name="arrow-right" />} />
          <Item type={type} title="标题文字" description="内容内容" icon={<Checkbox checked />} />
        </List>
        <br />
        <List>
          <Item type={type} title="标题文字" description="内容内容" thumbnail="http://placehold.it/45/1cabeb/ffffff?text=PACO-UI" badge={<Badge type="large" />} tips="下午 6:00" />
          <Item type={type} title="标题文字" description="内容内容" thumbnail="http://placehold.it/45/1cabeb/ffffff?text=PACO-UI" badge={<Badge type="large">1</Badge>} tips="上午 10:20" />
          <Item type={type} title="标题文字" description="内容内容" thumbnail="http://placehold.it/45/1cabeb/ffffff?text=PACO-UI" tips="昨天" />
        </List>
      </div>
    );
  }
  render() {
    const { active } = this.state;
    return (
      <div>
        <Tabs type={Tabs.types.NORMAL}>
          {tabs.map(({ type, name }, index) => (
            <Tab active={active === type} key={index} onClick={this.onClick.bind(this, type)}>
              {name}
            </Tab>
          ))}
        </Tabs>
        {this[active].call(this, active)}
      </div>
    );
  }
}

export default Component;
