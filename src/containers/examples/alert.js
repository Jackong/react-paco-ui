import React from 'react';

import Alert from '../../components/alert';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '你确定要这样搞吗？',
    };
  }
  onToggle() {
    this.setState({
      message: null,
    });
  }
  render() {
    return (
      <Alert
        ok="确定" cancel="取消"
        onOK={this.onToggle.bind(this)} onCancel={this.onToggle.bind(this)}
      >
        {this.state.message}
      </Alert>
    );
  }
}

export default Component;
