import * as type from '../types'

const main = (state = {menuToggle: false}, action) => {
  switch(action.type) {
    case type.CLICK_MENU: return {...state, menuToggle: action.payload};
    default: return {...state};
  }
};

export default main;