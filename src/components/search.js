import React, { PropTypes } from 'react';
import 'paco-ui/css/search.css';

import Mask from './mask';

class Search extends React.PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
  }
  static defaultProps = {
    placeholder: '搜索',
  }
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }
  onCancel() {
    this.refs.search.value = null;
    this.setState({ focus: false });
  }
  onClear() {
    this.refs.search.focus();
    this.refs.search.value = null;
  }
  onFocus() {
    this.setState({ focus: true });
  }
  render() {
    const { placeholder } = this.props;
    const { focus } = this.state;
    return (
      <div>
        <Mask hide={!focus} onClick={this.onCancel.bind(this)} />
        <div className={`search ${focus && 'focus'}`}>
          <div className="input">
            <input
              ref="search"
              type="search" required
              onFocus={this.onFocus.bind(this)}
            />
            <span className={'placeholder'} onClick={() => this.refs.search.focus()}>
              <i className="icon paco icon-search" />
              <span className="text">{placeholder}</span>
            </span>
            <i
              className="icon clear paco icon-wrong"
              onClick={this.onClear.bind(this)}
            />
          </div>
          <span
            onClick={this.onCancel.bind(this)}
            className="cancel"
          >
            取消
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
