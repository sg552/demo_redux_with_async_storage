/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// 以下为 为调用Redux 而新增的代码
// 这句话虽然没有被显示调用，但是不加会报错， 在 const myProvider那里。
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

// 导入redux-persist
import {PersistGate} from 'redux-persist/integration/react'

const {store, persistor}  = configureStore()

const onBeforeLift = () => {

}

const myProvider = () => {
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}
        onBeforeLift={onBeforeLift}
      >
        <App />
      </PersistGate>
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => myProvider);
