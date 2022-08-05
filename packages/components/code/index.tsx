import { FC } from 'react'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsLight'
import { prefixedName } from '@/common/constants'
import { LiCodeProps } from '@/types/code'

const prefixCls = `${prefixedName}__code`

const Code: FC<LiCodeProps> = ({ codeString, ...restProps }) => {
  const classes = classNames(prefixCls, {})

  return (
    <View className={classes} {...restProps}>
      <Highlight {...defaultProps} theme={theme} code={codeString.trim()} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <View className={classNames(className, `${prefixCls}--content`)} style={style}>
            {tokens.map((line, i) => (
              <View
                key={`liui__code--row__${i}`}
                {...getLineProps({ line, key: i })}
                className={classNames(getLineProps({ line, key: i }).className, `${prefixCls}--content__row`)}
              >
                <View className={`${prefixCls}--content__row--flex--0`}>
                  <Text className={`${prefixCls}--content__row--num`}>{i + 1}</Text>
                </View>
                <View className={`${prefixCls}--content__row--flex--1`}>
                  <Text className={`${prefixCls}--content__row--line`}>
                    {line.map((token, key) => (
                      <Text key={`liui__code--row__${i}--text__${key}`} {...getTokenProps({ token, key })} />
                    ))}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </Highlight>
    </View>
  )
}

export default Code
