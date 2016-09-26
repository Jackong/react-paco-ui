import React, { PropTypes } from 'react';
import 'paco-ui/css/agreement.css';

import CheckBox from './checkbox';

class AgreeMe extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  isAgreed() {
    return this.refs.checkbox.checked();
  }
  render() {
    const { children } = this.props;
    return (
      <span className="agree-it">
        <CheckBox ref="checkbox" checked>
          同意{children}
        </CheckBox>
      </span>
    );
  }
}

export default AgreeMe;
