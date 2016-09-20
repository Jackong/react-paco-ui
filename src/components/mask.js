import React, { PropTypes } from 'react';
import cx from 'classnames';

class Mask extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    transparent: PropTypes.bool,
    hide: PropTypes.bool,
  }
  render() {
    const { onClick, transparent, hide } = this.props;
    return (
      <div onClick={onClick} className={cx('mask', { transparent, hide })}></div>
    );
  }
}

export default Mask;
