import React, { PropTypes } from 'react';
import 'paco-ui/css/plate.css';

class Plate extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
  }
  render() {
    const { onClick, children } = this.props;
    return (
      <span className="plate" onClick={onClick}>
        {children}
      </span>
    );
  }
}

export default Plate;
