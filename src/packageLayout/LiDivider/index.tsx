import { FC } from 'react'
import { Text, View } from '@tarojs/components'
import { LiDivider, LiCode } from '@aries-hui/liui'
import CodeCard from '../../components/codeCard'
import './index.scss'

const LiDividerDemo: FC = () => (
  <View className="liui__demo__divider">
    <View className="liui__demo__divider--title">
      <Text className="liui__demo__divider--title__text">Divider</Text>
      <Text className="liui__demo__divider--title__desc">分割线</Text>
    </View>
    <View>
      <CodeCard
        title="水平分割线"
        description="默认为水平分割线，可在中间加入文字。"
        codeNode={
          <LiCode
            codeString={`
<LiDivider />
<LiDivider dashed/>
<LiDivider>你好</LiDivider>
<LiDivider dashed>你好</LiDivider>
`}
          />
        }
      >
        <LiDivider />
        <LiDivider dashed />
        <LiDivider>你好</LiDivider>
        <LiDivider dashed>你好</LiDivider>
      </CodeCard>
      <CodeCard
        codeNode={
          <LiCode
            codeString={
              '<LiDivider type="vertical">竖向</LiDivider>\n<LiDivider type="vertical" dashed>\n  竖向222\n</LiDivider>'
            }
          />
        }
        title="垂直分割线"
        description={'使用 type="vertical" 设置为行内的垂直分割线。'}
      >
        <LiDivider type="vertical">竖向</LiDivider>
        <LiDivider type="vertical" dashed>
          竖向222
        </LiDivider>
      </CodeCard>
      <CodeCard
        codeNode={
          <LiCode
            codeString={
              '<LiDivider orientation="left">你3好</LiDivider>\n' +
              '<LiDivider orientation="left" orientationMargin={20}>\n' +
              '  你3好\n' +
              '</LiDivider>\n' +
              '<LiDivider orientation="right">你3好</LiDivider>\n' +
              '<LiDivider orientation="right" orientationMargin={20}>\n' +
              '  你3好\n' +
              '</LiDivider>'
            }
          />
        }
        title="分割线文字位置"
        description="分割线中带有文字，可以用 orientation 指定文字位置。"
      >
        <LiDivider orientation="left">你3好</LiDivider>
        <LiDivider orientation="left" orientationMargin={20}>
          你3好
        </LiDivider>
        <LiDivider orientation="right">你3好</LiDivider>
        <LiDivider orientation="right" orientationMargin={20}>
          你3好
        </LiDivider>
      </CodeCard>
    </View>
  </View>
)

export default LiDividerDemo
