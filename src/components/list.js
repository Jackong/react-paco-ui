import React, { PropTypes } from 'react';
import cx from 'classnames';

class List extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  render() {
    return (
      <div className={cx('list')}>
        {this.props.children}
      </div>
    );
  }
}

export default List;
