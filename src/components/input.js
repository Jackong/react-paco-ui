import React, { PropTypes } from 'react';
import cx from 'classnames';

class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    verification: PropTypes.bool,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
    onClickIcon: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = { timing: -1 };
  }
  getCode() {
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
  clear() {
    this.refs.input.value = null;
  }
  value() {
    return this.refs.input.value;
  }
  render() {
    const { label, placeholder, type, value, verification, icon, onClickIcon } = this.props;
    const { timing } = this.state;
    return (
      <div className={cx('input-box')}>
        <label className={cx({ hide: !label })}>{label}</label>
        <input
          ref="input"
          className={cx(type, { divider: verification })}
          type={type}
          placeholder={placeholder}
          defaultValue={value}
        >
        </input>
        <i className={cx('icon', 'paco', icon, { hide: !icon })} onClick={onClickIcon} />
        <span
          onClick={this.getCode.bind(this)}
          className={cx({ verification, hide: !verification, timing: timing > 0 })}
        >
        {this.verification(timing)}
        </span>
      </div>
    );
  }
}

export default Input;
