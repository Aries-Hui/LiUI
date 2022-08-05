import { FC, useEffect } from 'react'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames'
import { prefixedName } from '@/common/constants'
import { LiTableProps, ColumnsType } from '@/types/table'

type ColumnsSortType = 'left' | 'center' | 'right'

const prefixCls = `${prefixedName}__table`

const Table: FC<LiTableProps> = ({ columns, className, scroll, dataSource, bordered }) => {
  const classnames = classNames(prefixCls, className)

  const columnsSelf = columns.reduce<{ [key in ColumnsSortType]: ColumnsType[] }>(
    (previousValue, currentValue) => {
      if (currentValue.fixed === true || currentValue.fixed === 'left') {
        previousValue.left.push(currentValue)
      } else if (currentValue.fixed === 'right') {
        previousValue.right.push(currentValue)
      } else {
        previousValue.center.push(currentValue)
      }
      return previousValue as { [key in ColumnsSortType]: ColumnsType[] }
    },
    {
      left: [],
      center: [],
      right: [],
    },
  )

  useEffect(() => {
    console.log(columnsSelf, scroll, dataSource, bordered)
  }, [columnsSelf, scroll, dataSource, bordered])

  return (
    <View className={classnames}>
      <ScrollView className={`${prefixCls}--scrollX`} scrollX>
        {/*  thead */}
        <View className={`${prefixCls}--thead`} />
        {/*  tbody */}
        <View className={`${prefixCls}--tbody`}>
          <ScrollView className={`${prefixCls}--scrollX`} scrollY />
        </View>
      </ScrollView>
    </View>
  )
}

export default Table
