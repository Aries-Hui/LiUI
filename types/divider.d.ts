import { ComponentType } from 'react'
import { BaseComponentProps } from '@/types/base'

export interface LiDividerProps extends BaseComponentProps {
  /** 是否虚线		*/
  dashed?: boolean
  /**
   * 分割线标题的位置
   * @default center
   * */
  orientation?: 'left' | 'right' | 'center'
  /** 标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right			*/
  orientationMargin?: number | string
  /**
   * 水平还是垂直类型
   * @default horizontal
   *  */
  type?: 'horizontal' | 'vertical'
}

declare const LiDivider: ComponentType<LiDividerProps>

export default LiDivider
