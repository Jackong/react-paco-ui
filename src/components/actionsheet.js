import React, { PropTypes } from 'react';
import 'paco-ui/css/actionsheet.css';
import cx from 'classnames';

import Button from './button';
import Mask from './mask';

class Actionsheet extends React.PureComponent {
  static propTypes = {
    tips: PropTypes.string,
    children: PropTypes.node.isRequired,
    hide: PropTypes.bool,
    onCancel: PropTypes.func.isRequired,
  }
  render() {
    const { tips, children, hide, onCancel } = this.props;
    return (
      <div>
        <Mask onClick={onCancel} hide={hide} />
        <div className={cx('actionsheet', { hide })}>
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
