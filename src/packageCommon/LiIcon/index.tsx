import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import {
  SettingConfig,
  Sleep,
  AllApplication,
  Camera,
  Config,
  Like,
  Dislike,
  Delete,
  Loading,
  Pic,
  TagOne,
  Save,
  Share,
  AddFour,
} from '@icon-park/svg'
import { StrokeLinecap, StrokeLinejoin, Theme } from '@icon-park/svg/es/runtime'
import { LiIcon, LiCode } from '@aries-hui/liui'
import CodeCard from '../../components/codeCard'

import './index.scss'

const iconConfigMap = [
  { name: '线性图标', theme: 'outline', fill: '#333' },
  { name: '填充图标', theme: 'filled', fill: '#333' },
  { name: '双色图标', theme: 'two-tone', fill: ['#333', '#06a17e'] },
  { name: '多色图标', theme: 'multi-color', fill: ['#333', '#2F88FF', '#FFF', '#43CCF8'] },
] as {
  name: string
  theme: Theme
  fill: string | string[]
}[]

const iconMap = [
  SettingConfig,
  Sleep,
  AllApplication,
  Camera,
  Config,
  Like,
  Dislike,
  Delete,
  Loading,
  Pic,
  TagOne,
  Save,
  Share,
  AddFour,
]

export default class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className="liui__demo__icon">
        <View className="liui__demo__icon--title">
          <Text className="liui__demo__icon--title__text">Icon</Text>
          <Text className="liui__demo__icon--title__desc">图标</Text>
          <Image
            style={{ width: 70, height: 12 }}
            src="https://camo.githubusercontent.com/62cb32328c2de00e88fb7d240149820dc2071ebf14c1d3a2d8622c52efde3eaa/68747470733a2f2f7366312d647963646e2d746f732e7073746174702e636f6d2f6f626a2f6564656e2d636e2f6c737777686568376e7570776e75686f672f69636f6e732f6c6f676f2e737667"
          />
        </View>
        <View className="liui__demo__icon--infer">
          <Text>
            IconPark提供了超过2000个高质量图标，并且提供了一个界面来帮你定制图标。与使用各种SVG源文件来达到换肤效果的方案不同的是，我们实现了一种创新性的技术，
            通过改变一个SVG文件的属性来变换出多种主题。并且支持跨平台导出多种图标代码库，方便您在代码中以组件的形式按需引用，比如
            react-icons, vue-icons and svg-icons. 所以不管您是设计师还是开发者，都可以在您的项目中去使用IconPark.
          </Text>
        </View>
        <View>
          {iconConfigMap.map((iconConfig) => (
            <CodeCard
              title={iconConfig.name}
              description={`线性图标 theme = ${iconConfig.theme}，可通过 size 改变图标大小、strokeWidth 改变线段粗细、 strokeLinecap 改变端点类型 、strokeLinejoin 改变拐点类型 、 fill 改变填充颜色`}
              codeNode={
                <LiCode
                  codeString={
                    'import {AllApplication} from "@icon-park/svg"\n' +
                    `<LiIcon icon={AllApplication} theme="${iconConfig.theme}" size="24" fill={${iconConfig.fill}} />`
                  }
                />
              }
            >
              {iconMap.map((icon) => (
                <LiIcon icon={icon} theme={iconConfig.theme} size="24" fill={iconConfig.fill} />
              ))}
            </CodeCard>
          ))}
        </View>
        <CodeCard
          title="图标端点"
          description="strokeLinecap 改变端点类型"
          codeNode={
            <LiCode
              codeString={
                'import {SettingConfig} from "@icon-park/svg"\n' +
                '<LiIcon icon={SettingConfig} theme="outline" size="24" fill="#333" strokeLinecap="butt"/> \n' +
                '<LiIcon icon={SettingConfig} theme="outline" size="24" fill="#333" strokeLinecap="round"/> \n' +
                '<LiIcon icon={SettingConfig} theme="outline" size="24" fill="#333" strokeLinecap="square"/> \n'
              }
            />
          }
        >
          {(['butt', 'round', 'square'] as StrokeLinecap[]).map((cap) => (
            <LiIcon icon={SettingConfig} theme="outline" size="24" fill="#333" strokeLinecap={cap} />
          ))}
        </CodeCard>
        <CodeCard
          title="图标拐点"
          description="strokeLinejoin 改变拐点类型"
          codeNode={
            <LiCode
              codeString={
                'import {Sleep} from "@icon-park/svg"\n' +
                '<LiIcon icon={Sleep} theme="outline" size="24" fill="#333" strokeLinejoin="miter"/> \n' +
                '<LiIcon icon={Sleep} theme="outline" size="24" fill="#333" strokeLinejoin="round"/> \n' +
                '<LiIcon icon={Sleep} theme="outline" size="24" fill="#333" strokeLinejoin="bevel"/> \n'
              }
            />
          }
        >
          {(['miter', 'round', 'bevel'] as StrokeLinejoin[]).map((join) => (
            <LiIcon icon={Sleep} theme="outline" size="24" fill="#333" strokeLinejoin={join} />
          ))}
        </CodeCard>
        <View>
          <Text />
        </View>
      </View>
    )
  }
}
