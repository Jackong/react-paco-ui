import React, { PropTypes } from 'react';
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
      <div className={`card ${!!image && 'thumbnail'}`}>
        <div className="header">
          {header}
        </div>
        <div className="body">
          <div className="title">
            {title}
          </div>
          {image && (
            <div className="tips">
              {tips}
            </div>
          )}
          {image && (
            <img src={image} className="image" role="presentation" />
          )}
          <div className="content">
            {content}
          </div>
          {!image && (
            <div className="tips">
              {tips}
            </div>
          )}
          <div className="link">
            {link}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
