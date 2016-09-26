import React, { PropTypes } from 'react';
import cx from 'classnames';
import 'paco-ui/css/agreement.css';

class Agreement extends React.PureComponent {
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
