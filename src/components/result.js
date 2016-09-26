import React, { PropTypes } from 'react';
import 'paco-ui/css/result.css';

class Result extends React.PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['success', 'failure', 'warning', 'waiting', 'tips']).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }
  render() {
    const { type, title, description } = this.props;
    return (
      <div className={`result ${type}`}>
        <i className={`icon paco icon-${type}`} />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    );
  }
}

export default Result;
