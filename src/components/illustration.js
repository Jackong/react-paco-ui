import React, { PropTypes } from 'react';
import cx from 'classnames';

class Illustration extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  }
  render() {
    const { image, children } = this.props;
    return (
      <div className={cx('illustration')}>
        <img src={image} role="presentation" />
        <div className={cx('body')}>
          {children}
        </div>
      </div>
    );
  }
}

export default Illustration;
