import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { goBack } from 'react-router-redux';

import { changeTitle } from '../actions';

import Navbar from '../components/navbar';

@connect(state => ({
  title: state.title,
}))
class App extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  }
  goBack() {
    const { dispatch } = this.props;
    dispatch(goBack());
    dispatch(changeTitle('PACO-UI'));
  }
  render() {
    const { pathname } = this.props.location;
    const left = window.history.length > 1 && pathname !== '/' ? (
      <i className={cx('paco', 'icon-back')} />
    ) : null;
    return (
      <div>
        <Navbar left={left} onLeft={this.goBack.bind(this)}>
          {this.props.title}
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
