import { FC } from 'react'
import { Text, View } from '@tarojs/components'
import { LiToastProps } from '@/types/toast'
import LiButton from '@/components/button'

const Toast: FC<LiToastProps> = ({ isOpened, icon, text }) => (
  <>
    <View>
      <LiButton />
      <Text>{text}</Text>
    </View>
    {isOpened && (
      <View>
        <Text>11112222</Text>
        <View>
          <Text>{icon}</Text>
        </View>
      </View>
    )}
  </>
)

export default Toast
