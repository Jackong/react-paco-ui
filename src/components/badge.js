import React, { PropTypes } from 'react';
import cx from 'classnames';

class Badge extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['small', 'flag', 'large']).isRequired,
    children: PropTypes.string,
  }
  render() {
    const { type, children } = this.props;
    return (
      <span className={cx('badge', type)}>{children}</span>
    );
  }
}

export default Badge;
