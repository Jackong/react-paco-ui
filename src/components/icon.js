import React, { PropTypes } from 'react';
import cx from 'classnames';
import 'paco-ui/css/icon.css';

class Icon extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    highlight: PropTypes.bool,
    onClick: PropTypes.func,
  }
  render() {
    const { name, highlight, onClick } = this.props;
    return (
      <i
        className={cx('icon-wrapper', 'paco', `icon-${name}`, { highlight })}
        onClick={onClick}
      />
    );
  }
}

export default Icon;
