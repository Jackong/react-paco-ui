import React from 'react';

import Toast from '../../components/toast';
import Button from '../../components/button';

const styles = {
  button: {
    marginTop: 5,
  },
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'success',
      toast: null,
    };
  }
  onShow(type, toast) {
    this.setState({ toast, type });
  }
  onHide() {
    this.setState({ toast: null });
  }
  render() {
    return (
      <div className="ui">
        <Toast type={this.state.type}>
          {this.state.toast}
        </Toast>
        <Button
          onClick={this.onShow.bind(this, 'success', '成功提醒')}
          type="primary"
          style={styles.button}
        >
          success
        </Button>
        <Button
          onClick={this.onShow.bind(this, 'fail', '失败提醒')}
          type="primary"
          style={styles.button}
        >
          fail
        </Button>
        <Button
          onClick={this.onShow.bind(this, 'opps', '网络无法连接')}
          type="primary"
          style={styles.button}
        >
          opps
        </Button>

        <Button
          onClick={this.onHide.bind(this)}
          type="secondary"
          style={styles.button}
        >
          hide
        </Button>
      </div>
    );
  }
}

export default Component;
