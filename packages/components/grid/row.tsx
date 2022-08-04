import { FC, useMemo } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { Gap, LiRowProps } from '@/types/row'
import { prefixedName } from '@/common/constants'
import RowContext from '@/components/grid/rowContext'

const prefixCls = `${prefixedName}__row`

const Row: FC<Partial<LiRowProps>> = ({ justify, gutter, wrap, align, children, className }) => {
  const classes = classNames(prefixCls, {
    [`${prefixCls}--justify-${justify}`]: !!justify,
    [`${prefixCls}--align-${align}`]: !!align,
    [`${prefixCls}--nowrap`]: wrap,
    [`${className}`]: !!className,
  })

  const getGutter = (): [Gap, Gap] => {
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined]
    return normalizedGutter.map((g) => (typeof g === 'object' ? undefined : g)) as [Gap, Gap]
  }

  const gutters = getGutter()

  const rowContext = useMemo(() => ({ gutter: gutters }), [gutters])

  const horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined

  return (
    <RowContext.Provider value={rowContext}>
      <View
        className={classes}
        style={{
          marginLeft: horizontalGutter,
          marginRight: horizontalGutter,
          rowGap: gutters?.[1] || undefined,
        }}
      >
        {children}
      </View>
    </RowContext.Provider>
  )
}

export default Row
