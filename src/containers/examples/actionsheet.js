import React from 'react';

import Actionsheet from '../../components/actionsheet';
import Button from '../../components/button';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }
  onToggle() {
    this.setState({
      hide: !this.state.hide,
    });
  }
  render() {
    return (
      <div style={{ marginTop: '5%' }}>
        <Button type="primary" onClick={this.onToggle.bind(this)}>toggle</Button>
        <Actionsheet tips="说明文字说明文字说明文字" onCancel={this.onToggle.bind(this)} hide={this.state.hide}>
          <Button type="bottom">编辑</Button>
          <Button type="warning">删除</Button>
        </Actionsheet>
      </div>
    );
  }
}

export default Component;
