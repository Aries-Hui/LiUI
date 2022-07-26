import { ComponentType } from 'react'
import { ImageProps } from '@tarojs/components'
import { IIconProps } from '@icon-park/svg/lib/runtime'

export interface LiSvgIconProps extends IIconProps {
  /** iconpark 图标名称*/
  icon?: string
}

export interface LiIconProps extends Partial<ImageProps>, LiSvgIconProps {}

declare const LiIcon: ComponentType<LiIconProps>

export default LiIcon
