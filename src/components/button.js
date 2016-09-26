import React, { PropTypes } from 'react';
import 'paco-ui/css/button.css';

class Button extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'warning', 'outline', 'bottom']),
    disabled: PropTypes.bool,
  }
  render() {
    const { style, children, type, disabled, onClick } = this.props;
    return (
      <button
        onClick={!disabled && onClick}
        className={`btn ${type}`}
        disabled={disabled}
        style={style}
      >
        {children}
      </button>
    );
  }
}

export default Button;
