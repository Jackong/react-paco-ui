import React, { PropTypes } from 'react';
import 'paco-ui/css/captcha.css';

import Icon from './icon';

class Captcha extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }
  sms(waiting) {
    if (waiting < 0) {
      return '发送校验码';
    }
    if (waiting > 0) {
      return `${waiting}秒后重发`;
    }
    return '重发校验码';
  }
  image(image) {
    return (
      <span>
        {image ? (
          <img src={image} role="presentation" />
        ) : '加载中···'}
        <Icon name="refresh" />
      </span>
    );
  }
  render() {
    const { children, onClick } = this.props;
    const sms = typeof children === 'number';
    return (
      <span
        onClick={onClick}
        className={`captcha ${(sms ? children > 0 : !children) && 'waiting'}`}
      >
        {sms ? this.sms(children) : this.image(children)}
      </span>
    );
  }
}

export default Captcha;
