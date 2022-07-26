import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Toast, LiIcon } from '@aries-hui/liui'

import './index.scss'

export default class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className="index">
        <LiIcon icon="MarketAnalysis" theme="multi-color" size="24" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']} />
        <Text>Hello world!</Text>
        <Toast isOpened />
      </View>
    )
  }
}
