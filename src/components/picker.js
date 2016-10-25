import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import 'paco-ui/css/picker.css';

import Button from './button';
import Mask from './mask';

const OFFSET = `${100 / 3}%`;
const DELAY = 300;

class Picker extends React.Component {
  static propTypes = {
    onOK: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, DELAY);
  }
  onEnterYear(year) {
    this.setState({ year });
  }
  onEnterMonth(month) {
    this.setState({ month });
  }
  onEnterDate(date) {
    this.setState({ date });
  }
  placeholder() {
    return (
      <div className="row"></div>
    );
  }
  years() {
    const { isMounted, year } = this.state;
    const years = [];
    const date = new Date();
    for (let i = date.getFullYear() - 10, l = date.getFullYear() + 10; i < l; i++) {
      years.push(
        <div key={i} className={`row ${i === year ? 'selected' : ''}`}>
          {i}年
          {isMounted && (
            <Waypoint
              onEnter={this.onEnterYear.bind(this, i)}
              topOffset={OFFSET} bottomOffset={OFFSET}
            />
          )}
        </div>
      );
    }
    return years;
  }
  months() {
    const { isMounted, month } = this.state;
    const months = [];
    for (let i = 0; i < 12; i++) {
      months.push(
        <div key={i} className={`row ${i === month ? 'selected' : ''}`}>
          {i + 1}月
          {isMounted && (
            <Waypoint
              onEnter={this.onEnterMonth.bind(this, i)}
              topOffset={OFFSET} bottomOffset={OFFSET}
            />
          )}
        </div>
      );
    }
    return months;
  }
  dates() {
    const { isMounted, year, month, date } = this.state;
    const dates = [];
    const days = (new Date(year, month + 1, 1)
      - new Date(year, month, 1)) / (1000 * 60 * 60 * 24);
    for (let i = 1, l = days + 1; i < l; i++) {
      dates.push(
        <div key={i} className={`row ${i === date ? 'selected' : ''}`} >
          {i}日
          {isMounted && (
            <Waypoint
              onEnter={this.onEnterDate.bind(this, i)}
              topOffset={OFFSET} bottomOffset={OFFSET}
            />
          )}
        </div>
      );
    }
    return dates;
  }
  render() {
    const { onOK, onCancel } = this.props;
    return (
      <div>
        <Mask />
        <div className="picker">
          <div className="header">选择日期</div>
          <div className="body">
            <div className="mirror"></div>
            <div className="col">
              {this.placeholder()}
              {this.years()}
              {this.placeholder()}
            </div>
            <div className="col">
              {this.placeholder()}
              {this.months()}
              {this.placeholder()}
            </div>
            <div className="col">
              {this.placeholder()}
              {this.dates()}
              {this.placeholder()}
            </div>
          </div>
          <div className="btn-group">
            <Button type="secondary" onClick={onOK}>取消</Button>
            <Button type="secondary" onClick={onCancel}>确定</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Picker;
