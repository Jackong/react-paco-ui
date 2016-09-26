import React, { PropTypes } from 'react';
import 'paco-ui/css/addon.css';

class Addon extends React.PureComponent {
  static propTypes = {
    left: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  }
  render() {
    const { children, left, onClick } = this.props;
    return (
      <span className={`addon ${left && 'left'}`} onClick={onClick}>
        {children}
      </span>
    );
  }
}

export default Addon;
