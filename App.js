import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View} from 'react-native';
// 1. 导入相关的文件
import {connect } from 'react-redux'
import {increaseCount} from './action_creators'

import RNLanguages from 'react-native-languages';
import i18n from './i18n';


type Props = {};
//...
class App extends Component<Props> {
  click () {
    console.info("== in click")
    console.info("== this.props: ", this.props)
    console.info("== this.props.increaseCountByOne: ", this.props.increaseCountByOne)
    this.props.increaseCountByOne()
  }
  render() {
    return (
      <View>
        <Text> {i18n.t('title', { locale: 'en'})} {"\n"}
        1. 用Redux 保存数据到 AsyncStorage, {"\n"}
        2. 读出来，{"\n"}
        3. 再渲染页面。{"\n"}
        注意： 以上步骤都是“同步”的，需要使用 Redux, AsyncStorage, PersistGate.
        </Text>

        <Button
          title={i18n.t('click_text', {locale: 'en'})}
          onPress={this.click.bind(this)}
        >
        </Button>

        <Text>
        count: {this.props.count}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.countReducer.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCountByOne: () => {
      dispatch(increaseCount())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
