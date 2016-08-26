import React, { PropTypes } from 'react';
import cx from 'classnames';

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'warning', 'outline', 'bottom']),
    disabled: PropTypes.bool,
  }
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  onTouchStart() {
    this.setState({
      active: true,
    });
  }
  onTouchEnd() {
    this.setState({
      active: false,
    });
  }
  onTouchCancel() {
    this.setState({
      active: false,
    });
  }
  render() {
    const { style, children, type, disabled, onClick } = this.props;
    const { active } = this.state;
    return (
      <button
        onTouchStart={this.onTouchStart.bind(this)}
        onTouchEnd={this.onTouchEnd.bind(this)}
        onTouchCancel={this.onTouchCancel.bind(this)}
        onClick={!disabled && onClick}
        className={cx('btn', type, { disabled, active })}
        style={style}
      >
        {children}
      </button>
    );
  }
}

export default Button;
