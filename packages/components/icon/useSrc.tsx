import { useEffect, useState } from 'react'
import { Icon } from '@icon-park/svg/lib/runtime'
import { LiSvgIconProps } from '@/types/icon'

const useSrc = ({
  size = 24,
  fill = '#333',
  strokeLinejoin,
  strokeWidth,
  strokeLinecap,
  theme = 'outline',
  icon = 'ErrorPicture',
}: LiSvgIconProps): [string | undefined] => {
  const [svgBase, setSvgBase] = useState<string>()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const svgXmlData = require('@icon-park/svg')[icon || ''] as Icon
    if (!svgXmlData) {
      console.warn(`没有"${icon as string}"这个icon，请检查icon-park 和 自定义图标库。`)
    }
    const svgConfig = svgXmlData({ size, fill, strokeLinejoin, strokeWidth, strokeLinecap, theme })
    setSvgBase(`data:image/svg+xml;base64,${window.btoa(svgConfig)}`)
  }, [size, fill, strokeLinejoin, strokeWidth, strokeLinecap, theme, icon])

  return [svgBase]
}

export default useSrc
