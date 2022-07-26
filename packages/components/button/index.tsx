import { FC } from 'react'
import { Button } from '@tarojs/components'
import { LiButtonProps } from '@/types/button'

const LiButton: FC<LiButtonProps> = ({ loading }) => <Button loading={loading}>111</Button>

export default LiButton
