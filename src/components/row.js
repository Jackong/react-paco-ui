import React, { PropTypes } from 'react';
import cx from 'classnames';

class Row extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['single', 'double', 'expandable']).isRequired,
    description: PropTypes.node,
    image: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object,
    badge: PropTypes.oneOf(['unread', 'new']),
    time: PropTypes.string,
  }
  icon(icon) {
    if (!icon) {
      return null;
    }
    return typeof icon === 'string' ? (
      <i className={cx('icon', 'paco', `icon-${icon}`)} />
    ) : (
      <span className={cx('icon')}>{icon}</span>
    );
  }
  render() {
    const { type, children, description, image, icon, onClick, style, badge, time } = this.props;
    return (
      <div className={cx('row', type, { thumbnail: !!image })} onClick={onClick} style={style}>
        {image && <img src={image} role="presentation" />}
        <div className={cx('title')}>
          {children}
        </div>
        <div className={cx('badge', badge)}></div>
        <div className={cx('desc')}>
          {description}
          {this.icon(icon)}
        </div>
        <div className={cx('time')}>{time}</div>
      </div>
    );
  }
}

export default Row;
