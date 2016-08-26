import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { types } from '../actions';

function reducer(handlers, initialState) {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export const title = reducer({
  [types.CHANGE_TITLE]: (state, { payload }) => payload,
}, 'PACO-UI');

export default combineReducers({
  routing: routerReducer,
  title,
});
