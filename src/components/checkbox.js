import React, { PropTypes } from 'react';
import 'paco-ui/css/checkbox.css';

class CheckBox extends React.PureComponent {
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
      <span className="checkbox" onClick={this.onToggle.bind(this)}>
        <input type="checkbox" checked={checked} onChange={this.onToggle.bind(this)} />
        <i className={`paco icon ${checked ? 'icon-right' : 'icon-circle'}`} />
        <span>{children}</span>
      </span>
    );
  }
}

export default CheckBox;
