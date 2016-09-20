import React, { PropTypes } from 'react';
import cx from 'classnames';

class Plate extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
  }
  render() {
    const { onClick, children } = this.props;
    return (
      <span className={cx('plate')} onClick={onClick}>
        {children}
      </span>
    );
  }
}

export default Plate;
