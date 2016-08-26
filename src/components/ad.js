import React, { PropTypes } from 'react';
import cx from 'classnames';

class Ad extends React.Component {
  static propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    style: PropTypes.object,
    onClose: PropTypes.func,
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
    const { logo, title, description, link, style } = this.props;
    const { hide } = this.state;
    return (
      <a href={link} className={cx('ad', { hide })} style={style}>
        <img className={cx('logo')} src={logo} role="presentation" />
        <div className={cx('content')}>
          <div className={cx('title')}>{title}</div>
          <div className={cx('desc')}>{description}</div>
        </div>
        <i onClick={this.onClose.bind(this)} className={cx('close', 'paco', 'icon-close')} />
      </a>
    );
  }
}

export default Ad;
