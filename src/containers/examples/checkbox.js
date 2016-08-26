import React from 'react';

import CheckBox from '../../components/checkbox';

class Component extends React.Component {
  render() {
    return (
      <div style={{ margin: '30%' }}>
        <CheckBox checked>选我选我</CheckBox>
        <br />
        <br />
        <CheckBox>选他选他</CheckBox>
      </div>
    );
  }
}

export default Component;
