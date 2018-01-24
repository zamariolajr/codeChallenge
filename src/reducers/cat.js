import { SHOW_CAT } from '../actions'

const initialState = {
  list: []
}

export function showCat(state = initialState, action){
    switch (action.type) {
      case SHOW_CAT:
          return Object.assign({}, state, {list: action.payload})
      default:
          return state


    }


}