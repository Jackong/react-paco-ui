import React, { PropTypes } from 'react';
import 'paco-ui/css/share.css';

import Button from './button';
import Mask from './mask';

class Share extends React.PureComponent {
  static propTypes = {
    channels: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      share: PropTypes.func.isRequired,
    })),
    info: PropTypes.object,
    onShare: PropTypes.func,
    onCancel: PropTypes.func,
    style: PropTypes.object,
  }
  render() {
    const { channels, info, onShare, onCancel, style } = this.props;
    return (
      <div>
        <Mask onClick={() => onCancel(new Error('Cancel share panel'))} hide={!info} />
        <div className={`share col-${channels.length} ${!info && 'hide'}`} style={style}>
          {channels.map((channel, index) => (
            <div
              key={index}
              className="channel"
              onClick={() => channel
                .share(info)
                .then(() => onShare(channel))
                .catch(onCancel)}
            >
              <div className="bg">
                <img src={channel.image} className="image" role="presentation" />
              </div>
              <div className="name">{channel.name}</div>
            </div>
          ))}
          <Button
            type="bottom"
            onClick={() => onCancel(new Error('Cancel share panel'))}
          >
            取消
          </Button>
        </div>
      </div>
    );
  }
}

export default Share;
