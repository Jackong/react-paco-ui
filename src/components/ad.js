import React, { PropTypes } from 'react';
import 'paco-ui/css/ad.css';

import Button from './button';

class Ad extends React.PureComponent {
  static propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    style: PropTypes.object,
    onClose: PropTypes.func,
    closable: PropTypes.bool,
  }
  static defaultProps = {
    closable: true,
  }
  constructor(props) {
    super(props);
    this.state = { hide: false };
  }
  onClose(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ hide: true });
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  }
  render() {
    const { logo, title, description, link, style, closable } = this.props;
    const { hide } = this.state;
    return (
      <a href={link} className={`ad ${hide && 'hide'}`} style={style}>
        <img className="logo" src={logo} role="presentation" />
        <div className="content">
          <div className="title">{title}</div>
          <div className="desc">{description}</div>
        </div>
        {closable ? (
          <i onClick={this.onClose.bind(this)} className="close paco icon-close" />
        ) : (
          <Button type="primary">点击下载</Button>
        )}
      </a>
    );
  }
}

export default Ad;
