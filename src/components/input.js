import React, { PropTypes } from 'react';
import 'paco-ui/css/input.css';

class Input extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    addons: PropTypes.node,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    readOnly: PropTypes.bool,
  }
  static defaultProps = {
    addons: [],
  }
  constructor(props) {
    super(props);
    this.state = { value: props.value || '' };
  }
  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({ value: props.value || '' });
    }
  }
  onChange(e) {
    const { onChange, type, maxLength } = this.props;
    if (onChange) {
      onChange(e);
    }
    const value = e.target.value;
    if (type === 'number' && !/^[0-9]{0,}$/.test(value)) {
      return;
    }
    this.setState({ value: maxLength ? value.substr(0, maxLength) : value });
  }
  clear() {
    this.setState({ value: '' });
  }
  value() {
    return this.state.value;
  }
  render() {
    const { label, placeholder, type, addons, onClick, disabled, readOnly, maxLength } = this.props;
    return (
      <div className="input-box">
        {label && <label>{label}</label>}
        {addons.filter(addon => addon.props.left)}
        <input
          ref="input"
          className={type}
          type={type === 'number' ? 'text' : type}
          placeholder={placeholder}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onClick={onClick}
          disabled={disabled}
          maxLength={maxLength}
          readOnly={readOnly}
        >
        </input>
        {addons.filter(addon => !addon.props.left)}
      </div>
    );
  }
}

export default Input;
