import React, { PropTypes } from 'react';
import 'paco-ui/css/border.css';

class Border extends React.PureComponent {
  static propTypes = {
    position: PropTypes.oneOf([
      'left', 'right',
      'top', 'bottom',
      'left-right', 'top-bottom',
    ]),
    style: PropTypes.object,
    children: PropTypes.node,
  }
  render() {
    const { style, position, children } = this.props;
    return (
      <div className={position ? `border-${position}` : 'border'} style={style}>
        {children}
      </div>
    );
  }
}

export default Border;
