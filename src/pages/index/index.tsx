import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { LiToast } from '@aries-hui/liui'

import './index.scss'

export default class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <LiToast isOpened />
      </View>
    )
  }
}
