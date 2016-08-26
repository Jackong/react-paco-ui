import React from 'react';

import Input from '../../components/input';

class Component extends React.Component {
  onClear() {
    this.refs.iconInput.clear();
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
          onClickIcon={this.onClear.bind(this)}
          label="提示标签"
          placeholder="输入内容提示"
          icon="icon-wrong"
        />
        <br />
        <Input label="提示标签" placeholder="输入内容提示" icon={['icon-camera', 'highlight']} />
        <br />
        <Input label="校验码" placeholder="输入校验码" verification />
      </div>
    );
  }
}

export default Component;
