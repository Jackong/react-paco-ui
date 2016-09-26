import React, { PropTypes } from 'react';
import 'paco-ui/css/item.css';

class Item extends React.PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['single', 'double']).isRequired,
    description: PropTypes.node,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    style: PropTypes.object,
    badge: PropTypes.node,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    tips: PropTypes.string,
  }
  single() {
    const { title, thumbnail, description, badge, icon, onClick, style } = this.props;
    return (
      <div
        className="item single" data-type={thumbnail && 'thumbnail'}
        onClick={onClick} style={style}
      >
        {thumbnail && <img src={thumbnail} className="thumbnail" role="presentation" />}
        <span className="title">{title}</span>
        {badge && <span className="badge-ctn">{badge}</span>}
        <span className="description">
          {description}
          {icon && <span className="icon">{icon}</span>}
        </span>
      </div>
    );
  }
  double() {
    const { title, thumbnail, description, badge, icon, tips, onClick, style } = this.props;
    return (
      <div className="item double" onClick={onClick} style={style}>
        {thumbnail && <img src={thumbnail} className="thumbnail" role="presentation" />}
        <span className="content">
          {badge && <span className="badge-ctn">{badge}</span>}
          <span className="title">{title}</span>
          <span className="description">{description}</span>
        </span>
        <span className="tips">{tips}</span>
        <span className="icon">{icon}</span>
      </div>
    );
  }
  render() {
    const { type } = this.props;
    return this[type].call(this);
  }
}

export default Item;
