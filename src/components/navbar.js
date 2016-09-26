import React, { PropTypes } from 'react';
import 'paco-ui/css/navbar.css';

class Navbar extends React.PureComponent {
  static propTypes = {
    left: PropTypes.node,
    onLeft: PropTypes.func,
    children: PropTypes.node.isRequired,
    right: PropTypes.node,
    onRight: PropTypes.func,
  }
  render() {
    const { left, onLeft, children, right, onRight } = this.props;
    return (
      <div className="navbar-wrapper">
        <div className="navbar">
          {left && <div className="left" onClick={onLeft}>{left}</div>}
          <div className="title">{children}</div>
          {right && <div className="right" onClick={onRight}>{right}</div>}
        </div>
      </div>
    );
  }
}

export default Navbar;
