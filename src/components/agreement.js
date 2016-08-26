import React, { PropTypes } from 'react';
import cx from 'classnames';

class Agreement extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  render() {
    return (
      <div className={cx('agreement')}>
        {this.props.children}
      </div>
    );
  }
}

export default Agreement;
