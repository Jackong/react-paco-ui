import React, { PropTypes } from 'react';
import cx from 'classnames';

const types = {
  NORMAL: 'normal',
  LINK: 'link',
  CLOSE: 'close',
};

const icons = {
  [types.LINK]: 'icon-arrow-right',
  [types.CLOSE]: 'icon-close',
};

class Announcement extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf([types.NORMAL, types.LINK, types.CLOSE]),
    link: PropTypes.string,
    onClose: PropTypes.func,
  }
  static types = types
  static defaultProps = {
    type: types.NORMAL,
  }
  render() {
    const { type, link, onClose } = this.props;
    const icon = icons[type];
    return (
      <a className={cx('announcement', { hide: !this.props.children })} href={link}>
        <i className={cx('paco', icon, { icon })} onClick={onClose || (() => {})} />
        <span className={cx('message')}>
          {this.props.children}
        </span>
      </a>
    );
  }
}

export default Announcement;
