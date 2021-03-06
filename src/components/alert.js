import React, { PropTypes } from 'react';
import 'paco-ui/css/alert.css';

import Button from './button';
import Mask from './mask';

class Alert extends React.PureComponent {
  static propTypes = {
    header: PropTypes.string,
    children: PropTypes.node,
    ok: PropTypes.string,
    cancel: PropTypes.string,
    onOK: PropTypes.func,
    onCancel: PropTypes.func,
    style: PropTypes.object,
  }
  static defaultProps = {
    header: '温馨提示',
    ok: '确定',
    cancel: '取消',
  }
  onCancel() {
    if (this.props.onCancel) {
      this.props.onCancel(new Error('Cancel alert'));
    }
  }
  onOK() {
    if (this.props.onOK) {
      this.props.onOK();
    }
  }
  render() {
    const { header, ok, cancel, children, style } = this.props;
    const hide = !children;
    return (
      <div>
        <Mask hide={hide} />
        <div className={`alert ${hide && 'hide'}`} style={style}>
          <p className="header">
            {header}
          </p>
          <p className="message">
            {children}
          </p>
          <div className={`btn-group ${(ok && cancel) ? 'col-2' : 'col-1'}`}>
            {cancel && <Button type="secondary" onClick={this.onCancel.bind(this)}>
              {cancel}
            </Button>}
            {ok && <Button type="secondary" onClick={this.onOK.bind(this)}>
              {ok}
            </Button>}
          </div>
        </div>
      </div>
    );
  }
}

export default Alert;
