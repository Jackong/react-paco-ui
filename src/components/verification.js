import React, { PropTypes } from 'react';
import cx from 'classnames';

class Verification extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = { timing: -1 };
  }
  getCode() {
    this.props.onClick();
    this.setState({ timing: 59 });
    const intervalId = setInterval(() => {
      const timing = this.state.timing - 1;
      this.setState({ timing });
      if (timing <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  verification(timing) {
    if (timing < 0) {
      return '发送校验码';
    }
    if (timing > 0) {
      return `${timing}秒后重发`;
    }
    return '重发校验码';
  }
  render() {
    const { timing } = this.state;
    return (
      <span
        onClick={this.getCode.bind(this)}
        className={cx('verification', { timing: timing > 0 })}
      >
      {this.verification(timing)}
      </span>
    );
  }
}

export default Verification;
