import React, { PropTypes } from 'react';
import cx from 'classnames';

import Button from './button';
import Mask from './mask';

class Modal extends React.Component {
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
      <div className={cx({ hide: !isShow })}>
        <Mask onClick={this.onClose.bind(this)} />
        <div className={cx('modal')}>
          <i onClick={this.onClose.bind(this)} className={cx('close', 'paco', 'icon-close')} />
          <img className={cx('image')} src={image} role="presentation" />
          <div className={cx('desc')}>{desc}</div>
          <div className={cx('tips')}>{tips}</div>
          <div className={cx('btns')}>
            <Button onClick={this.onOK.bind(this)} type="primary">{btn}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
