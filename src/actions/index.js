export const types = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

export const changeTitle = payload => ({
  type: types.CHANGE_TITLE,
  payload,
});
