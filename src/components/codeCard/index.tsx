import { View } from '@tarojs/components'
import { FC, ReactNode } from 'react'
import { LiDivider } from '@aries-hui/liui'
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
    <LiDivider orientation="left">{title}</LiDivider>
    <View className="liui__demo__codeCard--desc">{description}</View>
    <View className="liui__demo__codeCard--code">{codeNode}</View>
  </View>
)

export default CodeCard
