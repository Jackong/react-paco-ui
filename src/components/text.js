import React, { PropTypes } from 'react';
import cx from 'classnames';

class Text extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['t1', 't2', 't3', 't4', 't5', 't6']),
    children: PropTypes.node.isRequired,
  }
  render() {
    const { type, children } = this.props;
    return (
      <div className={cx(type)}>{children}</div>
    );
  }
}

export default Text;
