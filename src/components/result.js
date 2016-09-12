import React, { PropTypes } from 'react';
import cx from 'classnames';

const icon = {
  success: 'icon-right',
  failure: 'icon-wrong',
  tips: 'icon-tips',
};

class Result extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['success', 'failure', 'warning', 'waiting', 'tips']).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }
  render() {
    const { type, title, description } = this.props;
    return (
      <div className={cx('result', type)}>
        <i className={cx('icon', 'paco', icon[type])} />
        <div className={cx('title')}>{title}</div>
        <div className={cx('description')}>{description}</div>
      </div>
    );
  }
}

export default Result;
