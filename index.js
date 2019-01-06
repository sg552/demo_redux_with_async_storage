/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// 以下为 为调用Redux 而新增的代码
// 这句话虽然没有被显示调用，但是不加会报错， 在 const myProvider那里。
import React from 'react'
import configureStore from './store'
import { Provider } from 'react-redux'
const store = configureStore()

const myProvider = () => {
  return (
    <Provider store = {store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => myProvider);
