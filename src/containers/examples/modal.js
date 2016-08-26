import React from 'react';

import Modal from '../../components/modal';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  onClose() {
    this.setState({
      isShow: false,
    });
  }
  render() {
    const modal = {
      image: 'http://placehold.it/250/1cabeb/ffffff?text=PACO-UI',
      desc: '说明方案',
      tips: '终极辅助说明方案',
      btn: '主按钮',
    };
    return (
      <Modal
        {...modal} isShow={this.state.isShow}
        onOK={this.onClose.bind(this)} onClose={this.onClose.bind(this)}
      />
    );
  }
}

export default Component;
