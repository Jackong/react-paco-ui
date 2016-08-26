import { takeEvery } from 'redux-saga';

import { types } from '../actions';

export function* changeTitle({ payload }) {
  document.title = payload;
}

function* titleFlow() {
  yield* takeEvery(types.CHANGE_TITLE, changeTitle);
}

export default function* sagas() {
  yield [
    titleFlow(),
  ];
}
