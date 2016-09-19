import React from 'react';

import Keyboard from '../../components/keyboard';
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
        <Keyboard hide={this.state.hide} />
      </div>
    );
  }
}

export default Component;
