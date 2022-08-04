import { FC, useContext } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { prefixedName } from '@/common/constants'
import RowContext from '@/components/grid/rowContext'
import { LiColProps } from '@/types/col'

const prefixCls = `${prefixedName}__col`

const Col: FC<LiColProps> = ({ span, offset, order, children }) => {
  const { gutter = [undefined, undefined] } = useContext(RowContext)

  const classes = classNames(prefixCls, {
    [`${prefixCls}--${span}`]: !!span,
    [`${prefixCls}--offset--${offset}`]: !!offset,
  })

  return (
    <View
      className={classes}
      style={{
        order,
        paddingLeft: !!gutter[0] && gutter[0] > 0 ? gutter[0] / -2 : undefined,
        paddingRight: !!gutter[0] && gutter[0] > 0 ? gutter[0] / -2 : undefined,
      }}
    >
      {children}
    </View>
  )
}

export default Col
