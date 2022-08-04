import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { MarketAnalysis } from '@icon-park/svg'
import { LiIcon } from '@aries-hui/liui'

import './index.scss'

export default class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className="liui__demo__icon">
        <View>
          <Text>Icon</Text>
        </View>
        <LiIcon icon={MarketAnalysis} theme="multi-color" size="24" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']} />
      </View>
    )
  }
}
