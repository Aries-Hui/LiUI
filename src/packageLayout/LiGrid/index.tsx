import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { LiRow, LiCol } from '@aries-hui/liui'

import './index.scss'

export default class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className="liui__demo__grid">
        <View className="liui__demo__grid--title">
          <Text className="liui__demo__grid--title__text">Grid</Text>
          <Text className="liui__demo__grid--title__desc">栅格</Text>
        </View>
        <View>
          <LiRow>
            <LiCol span={8}> span : 8</LiCol>
          </LiRow>
        </View>
      </View>
    )
  }
}
