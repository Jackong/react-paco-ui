import React, { PropTypes } from 'react';
import 'paco-ui/css/announcement.css';

const types = {
  NORMAL: 'normal',
  LINK: 'link',
  CLOSE: 'close',
};

const icons = {
  [types.LINK]: 'icon-arrow-right',
  [types.CLOSE]: 'icon-close',
};

class Announcement extends React.PureComponent {
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
      <a className={`announcement ${!this.props.children && 'hide'}`} href={link}>
        <i className={`paco ${icon} ${icon && 'icon'}`} onClick={onClose || (() => {})} />
        <span className="message">
          {this.props.children}
        </span>
      </a>
    );
  }
}

export default Announcement;
