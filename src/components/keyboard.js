import React, { PropTypes } from 'react';
import cx from 'classnames';

import Mask from './mask';

const provinces = [
  ['京', '津', '翼', '晋', '蒙', '辽', '吉', '黑', '沪', '苏'],
  ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤'],
  ['桂', '琼', '渝', '川', '贵', '云', '藏'],
  ['陕', '甘', '青', '宁', '新'],
];

const del = { name: '', value: 'DELETE', class: ['paco', 'icon-delete', 'delete'] };

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const codes = [
  [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  ],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  [
    { name: '', value: 'UPPER', class: ['paco', 'icon-upper', 'upper'], disabled: true },
    'Z', 'X', 'C', 'V', 'B', 'N', 'M',
    del,
  ],
];

class Keyboard extends React.Component {
  static propTypes = {
    onKey: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired,
    hide: PropTypes.bool,
    type: PropTypes.oneOf(['province', 'city', 'code']),
    onCancel: PropTypes.func.isRequired,
  }
  static defaultProps = {
    type: 'province',
  }
  onKey(key) {
    const { type } = this.props;
    if ((typeof key === 'object' && key.disabled)
      || (type === 'city' && [del, 'I', 'O'].indexOf(key) >= 0)) {
      return;
    }
    const { onKey, onDel } = this.props;
    if (key === del) {
      onDel();
      return;
    }
    onKey({ [type]: key });
  }
  keys(allKeys, onClick) {
    return allKeys.map((keys, row) => (
      <div key={row} className={cx('keys')}>
        {keys.map((key, col) => {
          let name = key;
          let clz = '';
          let disabled = this.props.type === 'city' && ['I', 'O'].indexOf(key) >= 0;
          if (typeof key === 'object') {
            name = key.name;
            clz = key.class;
            disabled = key.disabled || (this.props.type === 'city' && key === del);
          }
          return (
            <span
              key={col}
              className={cx('key', clz, { disabled })}
              onClick={() => onClick(key)}
            >
              {name}
            </span>
          );
        })}
      </div>
    ));
  }
  province() {
    return this.keys(provinces, this.onKey.bind(this));
  }
  city() {
    return this.keys(
      [numbers.map(name => ({ name, disabled: true })), ...codes], this.onKey.bind(this)
    );
  }
  code() {
    return this.keys([numbers, ...codes], this.onKey.bind(this));
  }
  render() {
    const { hide, type, onCancel } = this.props;
    return (
      <div>
        <Mask onClick={onCancel} hide={hide} transparent />
        <div className={cx('keyboard', { hide })}>
          {this[type].call(this)}
        </div>
      </div>
    );
  }
}

export default Keyboard;
