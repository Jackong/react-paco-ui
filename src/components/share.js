import React, { PropTypes } from 'react';
import cx from 'classnames';

import Button from './button';
import Mask from './mask';

class Share extends React.Component {
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
      <div className={cx({ hide: !info })}>
        <Mask onClick={() => onCancel(new Error('Cancel share panel'))} />
        <div className={cx('share', `col-${channels.length}`)} style={style}>
          {channels.map((channel, index) => (
            <div
              key={index}
              className={cx('channel')}
              onClick={() => channel
                .share(info)
                .then(() => onShare(channel))
                .catch(onCancel)}
            >
              <div className={cx('bg')}>
                <img src={channel.image} className={cx('image')} role="presentation" />
              </div>
              <div className={cx('name')}>{channel.name}</div>
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
