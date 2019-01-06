import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  click () {
    console.info("=== hihihi")
  }
  render() {
    return (
      <View>
        <Text>这是个Demo, 用于演示 {"\n"}
        1. 用Redux 保存数据到 AsyncStorage, {"\n"}
        2. 读出来，{"\n"}
        3. 再渲染页面。{"\n"}
        注意： 以上步骤都是“同步”的，需要使用 Redux, AsyncStorage, PersistGate.
        </Text>

        <Button
          title="点击我，计数器+1"
          onPress={this.click}
        >
        </Button>
      </View>
    );
  }
}
