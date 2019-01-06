import { INCREASE_COUNT } from './types'

const initialState = {
  count: 0
}

const countReducer  = (state = initialState, action ) => {
  switch(action.type){
    case INCREASE_COUNT:
      console.info("== hi , before +1, count: " + state.count)
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

export default countReducer
