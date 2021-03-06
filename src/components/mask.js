import React, { PropTypes } from 'react';
import 'paco-ui/css/mask.css';

class Mask extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    transparent: PropTypes.bool,
    hide: PropTypes.bool,
  }
  render() {
    const { onClick, transparent, hide } = this.props;
    return (
      <div
        onClick={onClick}
        className={`mask ${transparent && 'transparent'} ${hide && 'hide'}`}
      >
      </div>
    );
  }
}

export default Mask;
