import React from 'react';

import Share from '../../components/share';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
    };
  }
  onCancel() {
    this.setState({
      info: null,
    });
  }
  render() {
    const channels = [
      {
        name: '微信朋友圈',
        image: 'http://hcz.pingan.com/common/images/wechat-friends.png',
        share: () => Promise.resolve(),
      },
      {
        name: '微信好友',
        image: 'http://hcz.pingan.com/common/images/wechat.png',
        share: () => Promise.resolve(),
      },
      {
        name: '新浪微博',
        image: 'http://hcz.pingan.com/common/images/weibo.png',
        share: info => Promise.resolve(info),
      },
    ];
    return (
      <Share
        channels={channels} info={this.state.info}
        onCancel={this.onCancel.bind(this)}
      />
    );
  }
}

export default Component;
