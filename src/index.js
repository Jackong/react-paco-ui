import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';

import 'paco-ui/css/font.css';
import './css/index.css';
import Root from './containers/root';

window.handleError = e => {
  /*  eslint no-console: ["error", { allow: ["error"] }] */
  console.error(e, e.stack);
};

window.onunhandledrejection = ({ reason }) => {
  window.handleError(reason instanceof Error ? reason : new Error(reason));
};

window.onerror = (msg, url, line, column, e) => {
  window.handleError(e || new Error(msg, url, line));
};

if (module.hot) {
  module.hot.accept();
}

try {
  render(<Root />, document.getElementById('root'));
  FastClick.attach(document.body);
} catch (e) {
  window.handleError(e);
}
