import React from 'react';

import Result from '../../components/result';
import Button from '../../components/button';

const results = {
  success: {
    next: 'failure',
    type: 'success',
    title: '支付成功',
    description: '所提交内容已成功完成验证',
  },
  failure: {
    next: 'tips',
    type: 'failure',
    title: '支付失败',
    description: '违章代办费托收不成功',
  },
  tips: {
    next: 'success',
    type: 'tips',
    title: '提示内容',
    description: '具体业务提示内容可以很长很长，长到变成两行，变成两行，成两行，两行，行',
  },
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = results.success;
  }
  onNext() {
    this.setState(results[this.state.next]);
  }
  render() {
    const { next, ...result } = this.state;
    return (
      <div>
        <Result {...result} />
        <Button type="primary" onClick={this.onNext.bind(this)} style={{ marginTop: '80%' }}>
          {next}
        </Button>
      </div>
    );
  }
}

export default Component;
