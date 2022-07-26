import { FC } from 'react'
import { Image, View } from '@tarojs/components'
import { LiIconProps } from '@/types/icon'
import useSrc from '@/components/icon/useSrc'

const LiIcon: FC<LiIconProps> = ({ icon, src, size, fill, strokeLinejoin, strokeWidth, strokeLinecap, theme }) => {
  const [svgBase64] = useSrc({ size, fill, strokeLinejoin, strokeWidth, strokeLinecap, theme, icon })

  return (
    <View>
      <Image src={src || svgBase64 || ''} onError={console.warn} />
    </View>
  )
}

export default LiIcon
