import { FC } from 'react'
import { Image } from '@tarojs/components'
import { LiIconProps } from '@/types/icon'
import useSrc from '@/components/icon/useSrc'

const LiIcon: FC<LiIconProps> = ({
  icon,
  src,
  size,
  fill,
  strokeLinejoin,
  strokeWidth,
  strokeLinecap,
  theme,
  ...props
}) => {
  const [svgBase64] = useSrc({ size, fill, strokeLinejoin, strokeWidth, strokeLinecap, theme, icon })

  return (
    <Image
      src={src || svgBase64 || ''}
      onError={console.warn}
      {...props}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}

export default LiIcon
