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
        <View>
          <Text>Grid</Text>
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
