import React from 'react';

import Picker from '../../components/picker';
import Input from '../../components/input';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      date: new Date(),
    };
  }
  onToggle() {
    this.setState({
      hide: !this.state.hide,
    });
  }
  onOK(date) {
    this.setState({ date });
    this.onToggle();
  }
  render() {
    const { date, hide } = this.state;
    return (
      <div>
        <br />
        <br />
        <Input
          label="选择日期" type="text" readOnly
          onClick={this.onToggle.bind(this)} value={Picker.toString(date)}
        />
        {hide && (
          <Picker
            ref={ref => {
              this.picker = ref;
            }}
            from={date.getFullYear() - 50} to={date.getFullYear() + 50}
            value={date}
            onOK={this.onOK.bind(this)} onCancel={this.onToggle.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default Component;
