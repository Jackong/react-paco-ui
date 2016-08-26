import React from 'react';

import Tab from '../../components/tab';
import Tabs from '../../components/tabs';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'tab1',
    };
  }
  onClick(active) {
    this.setState({ active });
  }
  render() {
    const { active } = this.state;
    return (
      <div className="ui">
        <Tabs type={Tabs.types.NORMAL}>
          {['tab1', 'tab2', 'tab3'].map((tab, index) => (
            <Tab active={active === tab} key={index} onClick={this.onClick.bind(this, tab)}>
              {tab}
            </Tab>
          ))}
        </Tabs>
        <br />
        <Tabs type={Tabs.types.PILLS}>
          {['tab1', 'tab2', 'tab3'].map((tab, index) => (
            <Tab active={active === tab} key={index} onClick={this.onClick.bind(this, tab)}>
              {tab}
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default Component;
