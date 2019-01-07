import {createStore, combineReducers } from 'redux'
import countReducer from './reducers'

// persist store
import {persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  countReducer: countReducer
})

const myReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer)

export default () => {
  let store = createStore(myReducer)
  let persistor = persistStore(store)
  return { store , persistor}
}
