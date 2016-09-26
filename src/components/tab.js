import React, { PropTypes } from 'react';
import cx from 'classnames';
import 'paco-ui/css/tab.css';

class Tab extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
  }
  render() {
    const { children, active, onClick, style } = this.props;
    return (
      <div className={cx('tab', { active })} style={style} onClick={onClick}>
        {children}
      </div>
    );
  }
}

export default Tab;
