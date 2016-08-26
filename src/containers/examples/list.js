import React from 'react';

import Row from '../../components/row';
import List from '../../components/list';
import Switch from '../../components/switch';
import Checkbox from '../../components/checkbox';
import Tab from '../../components/tab';
import Tabs from '../../components/tabs';

const styles = {
  row: {
    marginTop: 5,
    marginBottom: 5,
  },
};

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
        <Row type={type} description="内容内容" style={styles.row}>标题文字</Row>
        <Row type={type} description="内容内容" icon="arrow-right" style={styles.row} badge="unread">
          标题文字
        </Row>
        <Row type={type} icon="arrow-right" style={styles.row} badge="new">标题文字</Row>
        <Row type={type} icon={<Switch isOpen />} style={styles.row} >标题文字</Row>
        <List>
          <Row type={type} description="内容内容">标题文字</Row>
          <Row type={type} description="内容内容" icon="arrow-right">标题文字</Row>
          <Row type={type} icon="arrow-right">标题文字</Row>
          <Row type={type} description="内容内容" icon={<Checkbox checked />}>标题文字</Row>
        </List>
        <br />
        <List>
          <Row type={type} description="内容内容" image="http://placehold.it/29x29/1cabeb/ffffff?text=PACO-UI" >标题文字</Row>
          <Row type={type} description="内容内容" image="http://placehold.it/29x29/1cabeb/ffffff?text=PACO-UI" icon="arrow-right">标题文字</Row>
          <Row type={type} image="http://placehold.it/29x29/1cabeb/ffffff?text=PACO-UI" icon="arrow-right">标题文字</Row>
        </List>
      </div>
    );
  }
  double(type) {
    return (
      <div>
        <Row type={type} description="内容内容" style={styles.row}>标题文字</Row>
        <Row type={type} description="内容内容" icon="arrow-right" style={styles.row}>
          标题文字
        </Row>
        <List>
          <Row type={type} description="内容内容">标题文字</Row>
          <Row type={type} description="内容内容" icon="arrow-right">标题文字</Row>
          <Row type={type} description="内容内容" icon={<Checkbox checked />}>标题文字</Row>
        </List>
        <br />
        <List>
          <Row type={type} description="内容内容" image="http://placehold.it/45/1cabeb/ffffff?text=PACO-UI" badge="unread" time="下午 6:00">
            标题文字
          </Row>
          <Row type={type} description="内容内容" image="http://placehold.it/45/1cabeb/ffffff?text=PACO-UI" time="上午 10:20">
            标题文字
          </Row>
          <Row type={type} description="内容内容" image="http://placehold.it/45/1cabeb/ffffff?text=PACO-UI" time="昨天">
            标题文字
          </Row>
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
