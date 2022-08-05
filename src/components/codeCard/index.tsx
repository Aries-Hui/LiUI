import { View, Text } from '@tarojs/components'
import { FC, ReactNode } from 'react'
import { LiDivider, LiIcon } from '@aries-hui/liui'
import { CodeBrackets } from '@icon-park/svg'
import { BaseComponentProps } from '@/types/base'
import './index.scss'

const CodeCard: FC<{ codeNode: ReactNode; title: string; description: ReactNode } & BaseComponentProps> = ({
  children,
  codeNode,
  title,
  description,
}) => (
  <View className="liui__demo__codeCard">
    <View className="liui__demo__codeCard--example">{children}</View>
    <LiDivider orientation="left">
      <Text style={{ paddingRight: 8 }}>{title}</Text>
      <LiIcon icon={CodeBrackets} theme="outline" size="12" fill="#333333" />
    </LiDivider>
    <View className="liui__demo__codeCard--desc">{description}</View>
    <View className="liui__demo__codeCard--code">{codeNode}</View>
  </View>
)

export default CodeCard
