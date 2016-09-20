import React from 'react';

import Keyboard from '../../components/keyboard';
import Input from '../../components/input';
import Addon from '../../components/addon';
import Plate from '../../components/plate';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      type: 'province',
      province: '京',
      city: '',
      code: '',
    };
  }
  onShow(type) {
    this.setState({
      hide: false,
      type,
    });
  }
  onCancel() {
    this.setState({
      hide: true,
    });
  }
  onChange({ province, city, code }) {
    this.setState({
      province: province || this.state.province,
      city,
      code: code.substr(0, 5),
      type: city ? 'code' : 'city',
    });
  }
  onKey({ province, city, code }) {
    this.onChange({
      province,
      city: city || this.state.city,
      code: this.state.code + (code || ''),
    });
  }
  onDel() {
    this.onChange({
      city: this.state.code.length === 0 ? '' : this.state.city,
      code: this.state.code.substr(0, this.state.code.length - 1),
    });
  }
  render() {
    const { hide, type, province, city, code } = this.state;
    return (
      <div style={{ marginTop: '5%' }}>
        <Input
          ref="addons"
          label="车牌号" placeholder="A-88888"
          value={city && `${city}-${code}`}
          onClick={this.onShow.bind(this, city ? 'code' : 'city')}
          maxLength={7}
          readOnly
          addons={[
            <Addon key="plate" left onClick={this.onShow.bind(this, 'province')}>
              <Plate>{province}</Plate>
            </Addon>,
          ]}
        />
        <Keyboard
          hide={hide}
          type={type}
          onCancel={this.onCancel.bind(this)}
          onKey={this.onKey.bind(this)}
          onDel={this.onDel.bind(this)}
        />
      </div>
    );
  }
}

export default Component;
