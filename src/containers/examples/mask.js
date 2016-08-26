import React from 'react';

import Mask from '../../components/mask';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }
  onClick() {
    this.setState({
      hide: true,
    });
  }
  render() {
    return (
      <Mask onClick={this.onClick.bind(this)} hide={this.state.hide} />
    );
  }
}

export default Component;
