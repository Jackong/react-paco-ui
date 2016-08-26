import React from 'react';

import AgreeMe from '../../components/agree-me';

class Component extends React.Component {
  render() {
    return (
      <div style={{ margin: '10%' }}>
        <AgreeMe>
          <a href="http://hcz.pingan.com/common/page/provision/loss.html">《平安好车主服务协议》</a>
        </AgreeMe>
      </div>
    );
  }
}

export default Component;
