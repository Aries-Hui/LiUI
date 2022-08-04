import '@aries-hui/liui/dist/style/index.css'
// import '@/style/index.scss'
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, CustomWrapper, Image } from '@tarojs/components'
import { LiCol, LiRow, LiDivider } from '@aries-hui/liui'
import menu from './menu'

import './index.scss'

export default class Index extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View className="liui__demo__home">
        <CustomWrapper>
          <LiRow justify="start" align="center">
            <LiCol span={10}>
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAIAAABt+uBvAAAFO0lEQVR4nOyb7XKyOhDHBVFnni+9m35CcUan1wQqxL5Ne01tR6w9M70erYgSXs6M2ycnB61LqIgv+X3oFA2w/NnsJpuoViQ7kQIhSIEQpEAIUiAEKRCCFAhBCoQgBUKQAiFIgRCkQAhSIAQpEIIUCEEKhCAFQpACIUiBEKRACHsQqNVqRVGU/GUfVp0RlNLk/6xWq7KNOhre3t6SJBmNRpZliTpRs9kkhBiGUbyZJZHyF9u2hQSCloSQgs38LTljkOM4lUoljuNGowGfhGGY8dx+v89E1HU9nwHHDnSo1PvP6EGEENYyCIKCLS0DFm5arRb7UNf1jAIFQcAHddu2izf5sGzNVqZpZhRotVqlEl/B9v4KTfQE9sJT/atarcI/aK+5ublpt9vwfxzH9/f3ojYcEmGBVPU7rj8/P/OfM4GWy+XuK7yvEb3vyfD6+pokSRzHqc/DMEySJHsuO1sggmwKAdEE0v9FA3OLVIQG1c4zZ4sCOT4VaI4/GeVGeCQNQfrj4wMObdt2XTdJksFgUIB55aOInrDpKVEUaZpwNjwVBDzIMIxU6EmSZDgcdjqdAgw7FgTefKvVYp4ShmGtVivMqlPmVMoUpQECocPls0EW7RFyCsRmZGdPzudUFOHxAdShe71evjueDBCDoigSOouv6hdm2nEgWuXSdZ2VEA8512eFXTiE/weDASEkXpPxKYS72GahYzedToeNmA5ZG6OUpt4HK84lSQIhopAlPLZSmLE9X4E+5OhptVpBp4bDMAxfXl7YIXhQlusIz6FEPaisaVq9XucXozzP63a77Nt8SSYTrG/P5/Ms7fkV10MWjHzfh8onIcR13SAIoOYJ3zqOk9GD8g9nMs7F7u7u+FNE019ubm9voYMPBoPr6+tarcaq5kIelF+ger2eZV3UdV0+WKqqOhqNsoyGTNPk191E+fz8rFQqjUZD07Q/f/5EaxRFMQyDENJutxeLBSHEsqzct9gOOCfQ7/cznsXSKmO3RvP5/PcbRVjvhq4Nd4QQQSmdTqdZBnTCEZR3B95pd6Oqar/fb6+BsP24Bl7sZDJpNpsQ0dk1KaUPDw+i5vFUq1XDMN7f32H4A51uPB4Ph0NoMB6P2Qrd3uBXUPOlbc/z+Mi9lcVisWe7D0kp45pTggl0CZvJhGMQ7OKANKlpGjhRr9dT1yhrijH1P2CwmuqVT09PP7VnbViuSK2b7wfLsnzf38xHp0gcx5TS5XLped5sNptOpz89NfK2bdtWVdW2bT5hMQ+qVCosI/DfMvg1RTZy/WdN6izTNL8N+ntl5ozwF0p0O9zTsixFUaAZuPPuR9uEUtrtdieTSabW/D6wKIp832fPwE9BPc8TtaNEptPpfD73fT8IglQm/anKvj0GEUIcx6GUPj4+xnHsum7qnU8mE1gOO63Fn6urK/5Q1/VmswmhczweZ70KjJV3z9p5/9r/aP2Y2NJRITEpikIp/Wm2xU+Fs4+nT5EtArHpiaZpo9Fo62n8FObiBOp2u8xBoECxuR8+a6g/YzanS6kGaPw/D34cLLTb7VQBMAzDrZuAzruLIfDZCmC7EPntzmWbWSqmaaa6m+M4uq5/fX1Jgb4xTTP1uzCYx1/KYmlGYIc0IwgCptpsNivbuqNh29w48X2/bLuKQnjKu3Wr+OXshsnE5s91TmtOfwjgV4OA67plm3OUQISmlPJ1IsnFIYMrghQIQQqEIAVCkAIhSIEQpEAIUiAEKRCCFAhBCoQgBUKQAiFIgRCkQAhSIAQpEIIUCEEKhPBvAAAA//8IN3/x63H50AAAAABJRU5ErkJggg=="
                style={{
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px',
                }}
              />
            </LiCol>
            <LiCol span={14}>
              <View>
                <Text className="liui__demo__home--name">LiUi</Text>
              </View>
              <View>
                <Text className="liui__demo__home--desc">基于taro的多端组件库</Text>
              </View>
            </LiCol>
          </LiRow>
        </CustomWrapper>
        {menu?.map((menuItem) => (
          <LiRow justify="start" className="liui__demo__home--nav">
            <LiCol span={24}>
              <LiDivider orientation="left">{menuItem.name}</LiDivider>
            </LiCol>
            <LiCol span={24}>
              <LiRow gutter={[0, 16]}>
                {menuItem.child?.map((child) => (
                  <LiCol span={24}>
                    <Button
                      onClick={() => {
                        Taro.navigateTo({
                          url: child.router,
                        })
                          .then((res) => console.log(res))
                          .catch((err) => console.log(err))
                      }}
                    >
                      {child.key} {child.name}
                    </Button>
                  </LiCol>
                ))}
              </LiRow>
            </LiCol>
          </LiRow>
        ))}
      </View>
    )
  }
}
