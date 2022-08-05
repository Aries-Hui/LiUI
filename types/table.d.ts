import { ComponentType, ReactNode } from 'react'

interface ColumnsTypeInside {
  /**
   * 设置列的对齐方式
   * @default left
   * */
  align: 'left' | 'right' | 'center'
  /**列样式类名*/
  className: string
  /** 列数据在数据项中对应的路径，支持通过数组查询嵌套路径*/
  dataIndex: string
  /** React 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性*/
  key: string
  /** 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引*/
  render: (text, record, index) => ReactNode
  /** 列头显示文字*/
  title: ReactNode
  /**列宽度*/
  width: string | number
  /** 列是否固定，可选 true (等效于 left) left right*/
  fixed: boolean | 'left' | 'right'
}

export interface ColumnsType extends Partial<ColumnsTypeInside> {}

export interface LiTableProps {
  /** 表格列的配置描述*/
  columns: ColumnsType[]
  /** 是否展示外边框和列边框	*/
  bordered: boolean
  /** 数据数组	*/
  dataSource: object[]
  /**表格是否可滚动*/
  scroll: {
    x: boolean | string | number
    y: string | number
  }
  /**列样式类名*/
  className: string
}

declare const LiTable: ComponentType<LiTableProps>

export default LiTable
