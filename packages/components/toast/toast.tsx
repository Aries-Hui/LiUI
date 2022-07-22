import { FC } from 'react'
import { Text, View } from '@tarojs/components'
import { LiToastProps } from '@/types/toast'

const Toast: FC<LiToastProps> = ({ isOpened, icon, text }) => (
  <>
    <View>
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
