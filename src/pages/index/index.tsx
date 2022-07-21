import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Toast } from '@aries-hui/liui'

import './index.scss'

export default class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Toast isOpened />
      </View>
    )
  }
}
