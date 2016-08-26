import React, { PropTypes } from 'react';
import cx from 'classnames';

class Border extends React.Component {
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
    const className = cx(position ? `border-${position}` : 'border');
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
}

export default Border;
