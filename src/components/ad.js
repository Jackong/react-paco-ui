import React, { PropTypes } from 'react';
import cx from 'classnames';

import Button from './button';

class Ad extends React.Component {
  static propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    style: PropTypes.object,
    onClose: PropTypes.func,
    closable: PropTypes.bool,
  }
  static defaultProps = {
    closable: true,
  }
  constructor(props) {
    super(props);
    this.state = { hide: false };
  }
  onClose(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ hide: true });
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  }
  render() {
    const { logo, title, description, link, style, closable } = this.props;
    const { hide } = this.state;
    return (
      <a href={link} className={cx('ad', { hide })} style={style}>
        <img className={cx('logo')} src={logo} role="presentation" />
        <div className={cx('content')}>
          <div className={cx('title')}>{title}</div>
          <div className={cx('desc')}>{description}</div>
        </div>
        {closable ? (
          <i onClick={this.onClose.bind(this)} className={cx('close', 'paco', 'icon-close')} />
        ) : (
          <Button type="primary">点击下载</Button>
        )}
      </a>
    );
  }
}

export default Ad;
