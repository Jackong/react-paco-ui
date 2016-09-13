import React from 'react';

import Ad from '../../components/ad';
import Button from '../../components/button';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { closable: false };
  }
  onClick() {
    this.setState({ closable: !this.state.closable });
  }
  render() {
    const ad = {
      logo: 'http://placehold.it/135/1cabeb/ffffff?text=PACO-UI',
      link: 'http://hcz.pingan.com',
      title: '平安好车主',
      description: '开车能赚钱，买车险全网最低',
    };
    const { closable } = this.state;
    return (
      <div>
        <br />
        <br />
        <Button type="primary" onClick={this.onClick.bind(this)}>
          {closable ? '不可关闭' : '可关闭'}
        </Button>
        <Ad {...ad} closable={closable} />
      </div>
    );
  }
}

export default Component;
