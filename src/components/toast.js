import React, { PropTypes } from 'react';
import cx from 'classnames';

const types = {
  SUCCESS: 'success',
  FAIL: 'fail',
  OPPS: 'opps',
  LOADING: 'loading',
};

const icons = {
  [types.SUCCESS]: 'right-o',
  [types.FAIL]: 'wrong-o',
  [types.OPPS]: 'opps',
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
        <i className={cx('paco', 'icon', type, `icon-${icons[type]}`)} />
        <p className={cx('message')}>{children}</p>
      </div>
    );
  }
}

export default Toast;
