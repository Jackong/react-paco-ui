import React, { PropTypes } from 'react';
import cx from 'classnames';

import CheckBox from './checkbox';

class AgreeMe extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  isAgreed() {
    return this.refs.checkbox.checked();
  }
  render() {
    const { children } = this.props;
    return (
      <span className={cx('agree-it')}>
        <CheckBox ref="checkbox" checked>
          同意{children}
        </CheckBox>
      </span>
    );
  }
}

export default AgreeMe;
