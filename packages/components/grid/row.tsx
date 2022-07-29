import { FC, useMemo } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { Gap, LiRowProps } from '@/types/row'
import { prefixedName } from '@/common/constants'
import RowContext from '@/components/grid/rowContext'

const prefixedRow = `${prefixedName}__row`

const Row: FC<Partial<LiRowProps>> = ({ justify, gutter, wrap, align, children, className }) => {
  const classes = classNames(prefixedRow, {
    [`${prefixedRow}--justify-${justify}`]: !!justify,
    [`${prefixedRow}--align-${align}`]: !!align,
    [`${prefixedRow}--nowrap`]: wrap,
    [`${className}`]: !!className,
  })

  const getGutter = (): [Gap, Gap] => {
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined]
    return normalizedGutter.map((g) => (typeof g === 'object' ? undefined : g)) as [Gap, Gap]
  }

  const gutters = getGutter()

  const rowContext = useMemo(() => ({ gutter: gutters }), [gutters])

  return (
    <RowContext.Provider value={rowContext}>
      <View
        className={classes}
        style={{
          marginLeft: gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined,
          marginRight: gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined,
          marginBottom: gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined,
        }}
      >
        {children}
      </View>
    </RowContext.Provider>
  )
}

export default Row
