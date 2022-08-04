import { FC } from 'react'
import classNames from 'classnames'
import { Text, View } from '@tarojs/components'
import { prefixedName } from '@/common/constants'
import { LiDividerProps } from '@/types/divider'

const prefixCls = `${prefixedName}__divider`

const Divider: FC<LiDividerProps> = ({
  dashed = false,
  type = 'horizontal',
  orientation = 'center',
  orientationMargin,
  children,
  ...restProps
}) => {
  const hasCustomMarginLeft = orientation === 'left' && orientationMargin != null
  const hasCustomMarginRight = orientation === 'right' && orientationMargin != null

  const classes = classNames(prefixCls, `${prefixCls}--${type}`, `${prefixCls}--${orientation}`, {
    [`${prefixCls}--dashed`]: dashed,
    [`${prefixCls}--with-text`]: dashed,
  })

  const innerStyle = {
    ...(hasCustomMarginLeft && { marginLeft: orientationMargin }),
    ...(hasCustomMarginRight && { marginRight: orientationMargin }),
  }

  return (
    <View className={classes} {...restProps}>
      {children && (
        <Text className={`${prefixCls}--inner-text`} style={innerStyle}>
          {children}
        </Text>
      )}
    </View>
  )
}

export default Divider
