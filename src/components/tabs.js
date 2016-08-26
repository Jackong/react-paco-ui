import React, { PropTypes } from 'react';
import cx from 'classnames';

const types = {
  NORMAL: 'normal',
  PILLS: 'pills',
};

class Tabs extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([types.NORMAL, types.PILLS]),
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
  }
  static defaultProps = {
    type: types.NORMAL,
  }
  static types = types
  render() {
    const { type, children, style } = this.props;
    return (
      <div className={cx('tabs', type, `col-${children.length}`)} style={style}>
        {children}
      </div>
    );
  }
}

export default Tabs;
