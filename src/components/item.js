import React, { PropTypes } from 'react';
import cx from 'classnames';

class Item extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['single', 'double']).isRequired,
    description: PropTypes.node,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    style: PropTypes.object,
    badge: PropTypes.node,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    tips: PropTypes.string,
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
  single() {
    const { title, thumbnail, description, badge, icon, onClick, style } = this.props;
    return (
      <div
        className={cx('item', 'single')} data-type={thumbnail && 'thumbnail'}
        onClick={onClick} style={style}
      >
        {thumbnail && <img src={thumbnail} className={cx('thumbnail')} role="presentation" />}
        <span className={cx('title')}>{title}</span>
        {badge && <span className={cx('badge-ctn')}>{badge}</span>}
        <span className={cx('description')}>
          {description}
          {icon && <span className={cx('icon')}>{icon}</span>}
        </span>
      </div>
    );
  }
  double() {
    const { title, thumbnail, description, badge, icon, tips, onClick, style } = this.props;
    return (
      <div className={cx('item', 'double')} onClick={onClick} style={style}>
        {thumbnail && <img src={thumbnail} className={cx('thumbnail')} role="presentation" />}
        <span className={cx('content')}>
          {badge && <span className={cx('badge-ctn')}>{badge}</span>}
          <span className={cx('title')}>{title}</span>
          <span className={cx('description')}>{description}</span>
        </span>
        <span className={cx('tips')}>{tips}</span>
        <span className={cx('icon')}>{icon}</span>
      </div>
    );
  }
  render() {
    const { type } = this.props;
    return this[type].call(this);
  }
}

export default Item;
