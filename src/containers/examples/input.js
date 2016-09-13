import React from 'react';

import Input from '../../components/input';
import Captcha from '../../components/captcha';
import Addon from '../../components/addon';
import Icon from '../../components/icon';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waiting: -1,
      image: 'http://placehold.it/128x64?text=21389',
    };
  }
  onClear(ref) {
    this.refs[ref].clear();
  }
  onSMSCaptcha() {
    this.setState({ waiting: 59 });
    const intervalId = setInterval(() => {
      const waiting = this.state.waiting - 1;
      this.setState({ waiting });
      if (waiting <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  onImageCaptcha() {
    this.setState({ image: null });
    setTimeout(() => {
      this.setState({
        image: 'http://placehold.it/128x64?text=21389',
      });
    }, 1000);
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
            <Addon key="verification" onClick={this.onSMSCaptcha.bind(this)}>
              <Captcha>
                {this.state.waiting}
              </Captcha>
            </Addon>,
          ]}
        />
        <br />
        <Input
          type="number"
          label="校验码" placeholder="输入校验码" addons={[
            <Addon key="verification" onClick={this.onImageCaptcha.bind(this)}>
              <Captcha>
                {this.state.image}
              </Captcha>
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
