import React, { PropTypes } from 'react';
import 'paco-ui/css/illustration.css';

class Illustration extends React.PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }
  render() {
    const { image, children } = this.props;
    return (
      <div className="illustration">
        <img src={image} role="presentation" />
        <div className="body">
          {children}
        </div>
      </div>
    );
  }
}

export default Illustration;
