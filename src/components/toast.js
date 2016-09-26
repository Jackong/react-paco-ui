import React, { PropTypes } from 'react';
import 'paco-ui/css/toast.css';

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

class Toast extends React.PureComponent {
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
      <div className={`toast ${!children && 'hide'}`} style={style}>
        <i className={`paco icon ${type} icon-${icons[type]}`} />
        <p className="message">{children}</p>
      </div>
    );
  }
}

export default Toast;
