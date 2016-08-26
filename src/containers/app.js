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
  goGithub() {
    window.location.href = 'https://github.com/Jackong/paco-ui';
  }
  render() {
    const { pathname } = this.props.location;
    const left = window.history.length > 1 && pathname !== '/' ? (
      <i className={cx('paco', 'icon-back')} />
    ) : null;
    const right = (
      <i className={cx('paco', 'icon-home')} />
    );
    return (
      <div>
        <Navbar
          left={left} onLeft={this.goBack.bind(this)}
          right={right} onRight={this.goGithub.bind(this)}
        >
          {this.props.title}
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
