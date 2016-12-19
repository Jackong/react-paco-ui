import React, { PropTypes } from 'react';
import 'paco-ui/css/item.css';

export default class Quick extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  }
  render() {
    const { onSearch, onClick } = this.props;
    const chars = [];
    for (let i = 0, l = 26; i < l; i++) {
      const char = String.fromCharCode(65 + i);
      chars.push(
        <div key={char} className="letter" onClick={() => onClick(char)}>{char}</div>
      );
    }
    return (
      <div className="quick">
        <div className="paco icon-search letter" onClick={onSearch} />
        {chars}
      </div>
    );
  }
}
