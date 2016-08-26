import React from 'react';

import Announcement from '../../components/announcement';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcement: '您的爱车暂无违章记录，请继续保持',
    };
  }
  onClose() {
    this.setState({
      announcement: null,
    });
  }
  render() {
    return (
      <Announcement type={Announcement.types.CLOSE} onClose={this.onClose.bind(this)}>
        {this.state.announcement}
      </Announcement>
    );
  }
}

export default Component;
