import {createStore, combineReducers } from 'redux'
import countReducer from './reducers'

const rootReducer = combineReducers({
  countReducer: countReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore
