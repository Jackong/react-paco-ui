import React from 'react';

import Input from '../../components/input';
import Verification from '../../components/verification';
import Addon from '../../components/addon';
import Icon from '../../components/icon';

class Component extends React.Component {
  onClear(ref) {
    this.refs[ref].clear();
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <Input placeholder="输入内容提示" />
        <br />
        <Input label="提示标签" placeholder="输入内容提示" />
        <br />
        <Input label="五个字标签" placeholder="输入内容提示" value="已输入内容" />
        <br />
        <Input
          ref="iconInput"
          label="提示标签"
          placeholder="输入内容提示"
          addons={[
            <Addon key="clear" onClick={this.onClear.bind(this, 'iconInput')}>
              <Icon name="wrong" />
            </Addon>,
          ]}
        />
        <br />
        <Input
          label="提示标签" placeholder="输入内容提示"
          addons={[
            <Addon key="camera">
              <Icon name="camera" highlight />
            </Addon>,
          ]}
        />
        <br />
        <Input
          type="number"
          label="校验码" placeholder="输入校验码" addons={[
            <Addon key="verification">
              <Verification onClick={() => {}} />
            </Addon>,
          ]}
        />
        <br />
        <Input
          ref="addons"
          label="提示标签" placeholder="输入内容提示"
          addons={[
            <Addon key="camera" left>
              <Icon name="camera" highlight />
            </Addon>,
            <Addon key="clear">
              <Icon name="wrong" onClick={this.onClear.bind(this, 'addons')} />
            </Addon>,
          ]}
        />
      </div>
    );
  }
}

export default Component;
