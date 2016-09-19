import React, { PropTypes } from 'react';
import cx from 'classnames';

const provinces = [
  ['京', '津', '翼', '晋', '蒙', '辽', '吉', '黑', '沪', '苏'],
  ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤'],
  ['桂', '琼', '渝', '川', '贵', '云', '藏'],
  ['陕', '甘', '青', '宁', '新'],
];

const back = { name: '返回', class: 'back' };

const cities = [
  [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U',
    { name: 'I', disabled: true }, { name: 'O', disabled: true }, 'P',
  ],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  [
    { name: '', value: 'UPPER', class: ['paco', 'icon-upper', 'upper'] },
    'Z', 'X', 'C', 'V', 'B', 'N', 'M',
    { name: '', value: 'DELETE', class: ['paco', 'icon-delete', 'delete'], disabled: true },
  ],
  [
    { name: '-', class: ['minus'], disabled: true },
    { name: '*', class: ['mult'], disabled: true },
    { name: '空格', class: ['blank'], disabled: true },
    back,
  ],
];

class Keyboard extends React.Component {
  static propTypes = {
    hide: PropTypes.bool,
    onEnter: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = { province: null, city: null, type: 'province' };
  }
  onProvince(province) {
    this.setState({ province, type: 'city' });
  }
  onCity(city) {
    if (typeof city === 'object' && city.disabled) {
      return;
    }
    if (city === back) {
      this.back();
      return;
    }
    this.setState({ city });
    const { onEnter } = this.props;
    if (!onEnter) {
      return;
    }
    let value = city;
    if (typeof city === 'object') {
      value = city.value;
    }
    onEnter(value);
  }
  back() {
    this.setState({ type: 'province' });
  }
  keys(allKeys, selected, abled, onClick) {
    return allKeys.map((keys, row) => (
      <div key={row} className={cx('keys')}>
        {keys.map((key, col) => {
          let name = key;
          let clz = '';
          let disabled = (abled && abled.indexOf(key) < 0);
          if (typeof key === 'object') {
            name = key.name;
            clz = key.class;
            disabled = key.disabled;
          }
          return (
            <span
              key={col}
              className={cx('key', clz, { selected: selected === key, disabled })}
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
    return this.keys(provinces, this.state.province, null, this.onProvince.bind(this));
  }
  city() {
    return this.keys(cities, this.state.city, this.state.province.cities, this.onCity.bind(this));
  }
  render() {
    const { hide } = this.props;
    const { type } = this.state;
    return (
      <div className={cx('keyboard', { hide })}>
        {this[type].call(this)}
      </div>
    );
  }
}

export default Keyboard;
