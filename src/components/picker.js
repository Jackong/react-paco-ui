import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import 'paco-ui/css/picker.css';

import Button from './button';
import Mask from './mask';

const isAndroid = /android/i.test(window.navigator.userAgent);
const OFFSET = `${100 / 3}%`;
const DELAY_MOUNT = 300;
const DELAY_SCROLL = isAndroid ? 700 : 1000;
const UNITS = {
  year: '年',
  month: '月',
  date: '日',
};

class Picker extends React.Component {
  static propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    value: PropTypes.instanceOf(Date),
    onOK: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }
  static defaultProps = {
    value: new Date(),
  }
  static toString(d) {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    return `${year}-${month < 10 ? '0' : ''}${month}-${date < 10 ? '0' : ''}${date}`;
  }
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      year: value.getFullYear(),
      month: value.getMonth() + 1,
      date: value.getDate(),
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, DELAY_MOUNT);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  onEnter(key, value, e) {
    clearTimeout(this.timer);
    if (!e.event) {
      const selected = document.querySelector(`.${key}.selected`);
      if (!selected) {
        return;
      }
      selected.previousSibling.scrollIntoView();
      return;
    }
    if (!isAndroid) {
      this.setState({
        [key]: value,
      });
    }
    this.timer = setTimeout(() => {
      if (isAndroid) {
        this.setState({
          [key]: value,
        });
      }
      const selected = document.querySelector(`.${key}.selected`);
      if (!selected) {
        return;
      }
      selected.previousSibling.scrollIntoView();
    }, DELAY_SCROLL);
  }
  onOK() {
    this.props.onOK(this.value());
  }
  value() {
    const { year, month, date } = this.state;
    return new Date(year, month - 1, date);
  }
  waypoints(from, to, name) {
    const value = this.state[name];
    const waypoints = [];
    for (let i = from; i < to; i++) {
      const selected = i === value;
      waypoints.push(
        <div
          key={`${name}-${i}`}
          className={`row ${name} ${selected && 'selected'}`}
        >
          {i}{UNITS[name]}
          <Waypoint
            fireOnRapidScroll
            onEnter={this.onEnter.bind(this, name, i)}
            topOffset={OFFSET} bottomOffset={OFFSET}
          />
        </div>
      );
    }
    return (
      <div className="col">
        <div className="row"></div>
        {waypoints}
        <div className="row"></div>
      </div>
    );
  }
  years() {
    const { from, to } = this.props;
    return this.waypoints(from, to, 'year');
  }
  months() {
    return this.waypoints(1, 13, 'month');
  }
  dates() {
    const { year, month } = this.state;
    const days = (new Date(year, month, 1)
      - new Date(year, month - 1, 1)) / (1000 * 60 * 60 * 24);
    return this.waypoints(1, days + 1, 'date');
  }
  render() {
    const { onCancel } = this.props;
    const { isMounted } = this.state;
    return (
      <div>
        <Mask onClick={onCancel} />
        <div className="picker">
          <div className="header">选择日期</div>
          <div className="body">
            <div className="mirror"></div>
            {isMounted && this.years()}
            {isMounted && this.months()}
            {isMounted && this.dates()}
          </div>
          <div className="btn-group">
            <Button type="secondary" onClick={onCancel}>取消</Button>
            <Button type="secondary" onClick={this.onOK.bind(this)}>确定</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Picker;
