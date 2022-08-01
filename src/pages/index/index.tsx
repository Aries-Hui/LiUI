import '@aries-hui/liui/style/index.css'

import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, CustomWrapper, Image } from '@tarojs/components'
import { LiCol, LiRow } from '@aries-hui/liui'
import menu from './menu'

import './index.scss'

export default class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className="liui__demo__home">
        {/* <LiIcon icon={MarketAnalysis} theme="multi-color" size="24" fill={['#333', '#2F88FF', '#FFF', '#43CCF8']} /> */}
        <CustomWrapper>
          <LiRow justify="start" align="center">
            <LiCol span={10}>
              <Image
                src="https://avatars.githubusercontent.com/u/44386646?s=96&v=4"
                style={{
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                }}
              />
            </LiCol>
            <LiCol span={14}>
              <View>
                <Text className="liui__demo__home--name">LiUi</Text>
              </View>
              <View>
                <Text className="liui__demo__home--desc">基于taro的多端组件库</Text>
              </View>
            </LiCol>
          </LiRow>
        </CustomWrapper>
        {menu?.map((menuItem) => (
          <LiRow justify="start" className="liui__demo__home--nav">
            <LiCol span={24}>
              <Text className="liui__demo__home--nav__title">{menuItem.name}</Text>
            </LiCol>
            {menuItem.child?.map((child) => (
              <LiCol span={24}>
                <Button
                  onClick={() => {
                    Taro.navigateTo({
                      url: child.router,
                    })
                      .then((res) => console.log(res))
                      .catch((err) => console.log(err))
                  }}
                >
                  {child.key} {child.name}
                </Button>
              </LiCol>
            ))}
          </LiRow>
        ))}
      </View>
    )
  }
}
