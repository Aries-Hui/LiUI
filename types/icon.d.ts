import { ComponentType } from 'react'
import { ImageProps } from '@tarojs/components'
import { Icon, IIconProps } from '@icon-park/svg/es/runtime'

export interface LiSvgIconProps extends IIconProps {
  /** iconpark 图标名称*/
  icon?: Icon
}

export interface LiIconProps extends Partial<ImageProps>, LiSvgIconProps {}

declare const LiIcon: ComponentType<LiIconProps>

export default LiIcon
