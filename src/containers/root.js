import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from '../store';
import App from './app';
import Home from './home';
import Ad from './examples/ad';
import AgreeMe from './examples/agree-me';
import Agreement from './examples/agreement';
import Alert from './examples/alert';
import Announcement from './examples/annoucement';
import Button from './examples/button';
import CheckBox from './examples/checkbox';
import Input from './examples/input';
import Search from './examples/search';
import Mask from './examples/mask';
import Border from './examples/border';
import Loading from './examples/loading';
import Modal from './examples/modal';
import Share from './examples/share';
import Switch from './examples/switch';
import Tabs from './examples/tabs';
import Toast from './examples/toast';
import List from './examples/list';
import Text from './examples/text';
import Card from './examples/card';
import Illustration from './examples/illustration';
import Actionsheet from './examples/actionsheet';
import Result from './examples/result';

const history = syncHistoryWithStore(hashHistory, store);

/*  global  DEBUG*/
const DevTools = DEBUG ? require('./tools.dev').default : require('./tools').default;

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="examples">
                <Route path="ad" component={Ad} />
                <Route path="agree-me" component={AgreeMe} />
                <Route path="agreement" component={Agreement} />
                <Route path="alert" component={Alert} />
                <Route path="announcement" component={Announcement} />
                <Route path="button" component={Button} />
                <Route path="checkbox" component={CheckBox} />
                <Route path="input" component={Input} />
                <Route path="search" component={Search} />
                <Route path="mask" component={Mask} />
                <Route path="border" component={Border} />
                <Route path="loading" component={Loading} />
                <Route path="modal" component={Modal} />
                <Route path="share" component={Share} />
                <Route path="switch" component={Switch} />
                <Route path="tabs" component={Tabs} />
                <Route path="toast" component={Toast} />
                <Route path="list" component={List} />
                <Route path="text" component={Text} />
                <Route path="card" component={Card} />
                <Route path="illustration" component={Illustration} />
                <Route path="actionsheet" component={Actionsheet} />
                <Route path="result" component={Result} />
              </Route>
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export default Root;
