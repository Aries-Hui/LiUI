import { ComponentType } from 'react'
import { BaseComponentProps } from '@/types/base'

export interface LiCodeProps extends Exclude<BaseComponentProps, 'children'> {
  codeString: string
}

declare const LiCode: ComponentType<LiCodeProps>

export default LiCode
