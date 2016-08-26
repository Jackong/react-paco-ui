import React from 'react';

import Ad from '../../components/ad';

class Component extends React.Component {
  render() {
    const ad = {
      logo: 'http://placehold.it/135/1cabeb/ffffff?text=PACO-UI',
      link: 'http://hcz.pingan.com',
      title: '平安好车主',
      description: '开车能赚钱，买车险全网最低',
    };
    return (
      <Ad {...ad} />
    );
  }
}

export default Component;
