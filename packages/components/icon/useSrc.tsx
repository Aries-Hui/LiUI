import { useEffect, useState } from 'react'
import { Base64 } from 'js-base64'
import { LiSvgIconProps } from '@/types/icon'

const useSrc = ({
  size = 24,
  fill = '#333',
  strokeLinejoin,
  strokeWidth,
  strokeLinecap,
  theme = 'outline',
  icon,
}: LiSvgIconProps): [string | undefined] => {
  const [svgBase, setSvgBase] = useState<string>()

  useEffect(() => {
    if (!icon) {
      console.warn(`没有指定icon，请前往选择icon-park。`)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const svgConfig = icon({ size, fill, strokeLinejoin, strokeWidth, strokeLinecap, theme })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setSvgBase(`data:image/svg+xml;base64,${Base64.btoa(svgConfig)}`)
    }
  }, [size, fill, strokeLinejoin, strokeWidth, strokeLinecap, theme, icon])

  return [svgBase]
}

export default useSrc
