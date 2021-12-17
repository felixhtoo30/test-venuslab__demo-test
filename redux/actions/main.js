import * as type from '../types'

export const setClickMenu = (clickMenu) => dispatch => dispatch({
  type: type.CLICK_MENU,
  payload: clickMenu
});