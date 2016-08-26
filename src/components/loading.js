import React, { PropTypes } from 'react';

import Toast from './toast';

class Loading extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.object,
  }
  static defaultProps = {
    children: '载入中',
  }
  render() {
    const { loading, style, children } = this.props;
    return (
      <Toast type={Toast.types.LOADING} style={style}>
        {loading && children}
      </Toast>
    );
  }
}

export default Loading;
