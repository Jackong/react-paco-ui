import React from 'react';

import Illustration from '../../components/illustration';
import Button from '../../components/button';

class Component extends React.Component {
  render() {
    return (
      <div>
        <Illustration image="http://placehold.it/135/1cabeb/ffffff?text=PACO-UI">
          <p>说明文本说明文本说明文本</p>
          <p>说明文本</p>
          <Button type="secondary">刷新</Button>
        </Illustration>
      </div>
    );
  }
}

export default Component;
