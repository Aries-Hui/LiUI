import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, CustomWrapper } from '@tarojs/components'
import { MarketAnalysis } from '@icon-park/svg'
import { LiIcon } from '@aries-hui/liui'

import './index.scss'

export default class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className="index">
        <LiIcon icon={MarketAnalysis} theme="multi-color" size="24" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']} />
        <CustomWrapper>
          <Text>Hello Liui!</Text>
        </CustomWrapper>
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/page/path/name',
            })
              .then((res) => console.log(res))
              .catch((err) => console.log(err))
          }}
        >
          icon
        </Button>
      </View>
    )
  }
}
