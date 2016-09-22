import React, { PropTypes } from 'react';
import cx from 'classnames';

class CheckBox extends React.Component {
  static propTypes = {
    onToggle: PropTypes.func,
    children: PropTypes.node,
    checked: PropTypes.bool,
  }
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }
  onToggle(e) {
    e.stopPropagation();
    const { onToggle } = this.props;
    const checked = !this.state.checked;
    this.setState({ checked });
    if (onToggle) {
      onToggle(checked);
    }
  }
  checked() {
    return this.state.checked;
  }
  render() {
    const { checked } = this.state;
    const { children } = this.props;
    return (
      <span className={cx('checkbox')} onClick={this.onToggle.bind(this)}>
        <input type="checkbox" checked={checked} onChange={this.onToggle.bind(this)} />
        <i className={cx('paco', 'icon', checked ? 'icon-right' : 'icon-circle')} />
        <span>{children}</span>
      </span>
    );
  }
}

export default CheckBox;
