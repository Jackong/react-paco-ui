import React, { PropTypes } from 'react';
import 'paco-ui/css/modal.css';

import Button from './button';
import Mask from './mask';

class Modal extends React.PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tips: PropTypes.string,
    btn: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    onOK: PropTypes.func,
    isShow: PropTypes.bool,
  }
  onClose() {
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  }
  onOK() {
    const { onOK } = this.props;
    if (onOK) {
      onOK();
    }
  }
  render() {
    const { image, desc, tips, btn, isShow } = this.props;
    return (
      <div>
        <Mask onClick={this.onClose.bind(this)} hide={!isShow} />
        <div className={`modal ${!isShow && 'hide'}`}>
          <i onClick={this.onClose.bind(this)} className="close paco icon-close" />
          <img className="image" src={image} role="presentation" />
          <div className="desc">{desc}</div>
          <div className="desc">{tips}</div>
          <Button onClick={this.onOK.bind(this)} type="primary">{btn}</Button>
        </div>
      </div>
    );
  }
}

export default Modal;
