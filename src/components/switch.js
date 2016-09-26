import React, { PropTypes } from 'react';
import 'paco-ui/css/switch.css';

class Switch extends React.PureComponent {
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
      <span className="switch">
        <input
          ref="switch" type="checkbox"
          defaultChecked={isOpen} onChange={e => onToggle && onToggle(e.target.checked)}
        />
        <div className="slider"></div>
      </span>
    );
  }
}

export default Switch;
