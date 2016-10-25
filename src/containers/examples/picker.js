import React from 'react';

import Picker from '../../components/picker';

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
    if (this.state.hide) {
      return null;
    }
    return (
      <Picker
        onOK={this.onToggle.bind(this)} onCancel={this.onToggle.bind(this)}
      />
    );
  }
}

export default Component;
