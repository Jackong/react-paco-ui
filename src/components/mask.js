import React, { PropTypes } from 'react';
import cx from 'classnames';

class Mask extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    hide: PropTypes.bool,
  }
  render() {
    const { onClick, hide } = this.props;
    return (
      <div onClick={onClick} className={cx('mask', { hide })}></div>
    );
  }
}

export default Mask;
