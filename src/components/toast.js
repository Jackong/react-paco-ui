import React, { PropTypes } from 'react';
import cx from 'classnames';

const types = {
  SUCCESS: 'success',
  FAIL: 'fail',
  OPPS: 'opps',
  LOADING: 'loading',
};

class Toast extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    type: PropTypes.oneOf([types.SUCCESS, types.FAIL, types.OPPS, types.LOADING]),
  }
  static defaultProps = {
    type: types.FAIL,
  }
  static types = types
  render() {
    const { style, children, type } = this.props;
    return (
      <div className={cx('toast', { hide: !children })} style={style}>
        <div className={cx('icon', type)}></div>
        <p className={cx('message')}>{children}</p>
      </div>
    );
  }
}

export default Toast;
