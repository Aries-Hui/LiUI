import { ComponentType } from 'react'
import { BaseComponentProps } from '@/types/base'

export type Gap = number | undefined

export interface LiRowProps extends BaseComponentProps {
  /** 列元素之间的间距（单位为 px）*/
  gutter: Gap | [Gap, Gap]
  /** 垂直对齐方式	*/
  align: 'top' | 'center' | 'bottom'
  /** 水平排列方式	*/
  justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
  /** 是否自动换行	*/
  wrap: boolean
}

declare const LiRow: ComponentType<Partial<LiRowProps>>

export default LiRow
