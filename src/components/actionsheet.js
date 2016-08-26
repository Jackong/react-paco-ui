import React, { PropTypes } from 'react';
import cx from 'classnames';

import Button from './button';
import Mask from './mask';

class Actionsheet extends React.Component {
  static propTypes = {
    tips: PropTypes.string,
    children: PropTypes.node.isRequired,
    hide: PropTypes.bool,
    onCancel: PropTypes.func.isRequired,
  }
  render() {
    const { tips, children, hide, onCancel } = this.props;
    return (
      <div className={cx('actionsheet-wrapper', { hide })}>
        <Mask onClick={onCancel} />
        <div className={cx('actionsheet')}>
          <div className={cx('tips')}>
            {tips}
          </div>
          {children}
          <Button type="bottom" onClick={onCancel}>取消</Button>
        </div>
      </div>
    );
  }
}

export default Actionsheet;
