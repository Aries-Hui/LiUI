import { ComponentType } from 'react'
import { BaseComponentProps } from '@/types/base'

export interface LiColProps extends BaseComponentProps {
  /** 列元素宽度	*/
  span: number | string
  /** 列元素偏移距离		*/
  offset?: number | string
  /** 栅格顺序		*/
  order?: number | string
}

declare const LiCol: ComponentType<LiColProps>

export default LiCol
