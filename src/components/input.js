import React, { PropTypes } from 'react';
import cx from 'classnames';

class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    addons: PropTypes.node,
    onChange: PropTypes.func,
  }
  static defaultProps = {
    addons: [],
  }
  clear() {
    this.refs.input.value = null;
  }
  value() {
    return this.refs.input.value;
  }
  render() {
    const { label, placeholder, type, value, addons, onChange } = this.props;
    return (
      <div className={cx('input-box')}>
        <label className={cx({ hide: !label })}>{label}</label>
        {addons.filter(addon => addon.props.left)}
        <input
          ref="input"
          className={cx(type)}
          type={type}
          placeholder={placeholder}
          defaultValue={value}
          onChange={onChange}
        >
        </input>
        {addons.filter(addon => !addon.props.left)}
      </div>
    );
  }
}

export default Input;
