import React, { PropTypes } from 'react';
import cx from 'classnames';

class Navbar extends React.Component {
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
      <div className={cx('navbar-wrapper')}>
        <div className={cx('navbar')}>
          {left && <div className={cx('left')} onClick={onLeft}>{left}</div>}
          <div className={cx('title')}>{children}</div>
          {right && <div className={cx('right')} onClick={onRight}>{right}</div>}
        </div>
      </div>
    );
  }
}

export default Navbar;
