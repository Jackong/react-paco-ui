import React, { PropTypes } from 'react';
import cx from 'classnames';
import 'paco-ui/css/card.css';

class Card extends React.PureComponent {
  static propTypes = {
    header: PropTypes.node,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    content: PropTypes.string.isRequired,
    tips: PropTypes.string.isRequired,
    link: PropTypes.node,
  }
  render() {
    const { header, title, image, content, tips, link } = this.props;
    return (
      <div className={cx('card', { thumbnail: !!image })}>
        <div className={cx('header')}>
          {header}
        </div>
        <div className={cx('body')}>
          <div className={cx('title')}>
            {title}
          </div>
          {image && (
            <div className={cx('tips')}>
              {tips}
            </div>
          )}
          {image && (
            <img src={image} className={cx('image')} role="presentation" />
          )}
          <div className={cx('content')}>
            {content}
          </div>
          {!image && (
            <div className={cx('tips')}>
              {tips}
            </div>
          )}
          <div className={cx('link')}>
            {link}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
