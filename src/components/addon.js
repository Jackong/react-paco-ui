import React, { PropTypes } from 'react';
import cx from 'classnames';

class Addon extends React.Component {
  static propTypes = {
    left: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  }
  render() {
    const { children, left, onClick } = this.props;
    return (
      <span className={cx('addon', { left })} onClick={onClick}>
        {children}
      </span>
    );
  }
}

export default Addon;
