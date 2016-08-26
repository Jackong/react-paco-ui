import React, { PropTypes } from 'react';
import cx from 'classnames';

class Switch extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onToggle: PropTypes.func,
  }
  isOpen() {
    return this.refs.switch.checked;
  }
  render() {
    const { isOpen, onToggle } = this.props;
    return (
      <span className={cx('switch')}>
        <input
          ref="switch" type="checkbox"
          defaultChecked={isOpen} onChange={e => onToggle && onToggle(e.target.checked)}
        />
        <div className={cx('slider')}></div>
      </span>
    );
  }
}

export default Switch;
