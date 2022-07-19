import { View } from '@tarojs/components'
import './BigCircleButton.less'


const BigCircleButton = ({ size, theme, onClick, children }) => {
  const nextSize = size || 'middle'
  const nextTheme = theme || 'light'
  return (
    <View className={`big-circle-button big-circle-${nextSize} big-circle-${nextTheme}`} onClick={ (...argument) => onClick(...argument) }>{ children }</View>
  )
}

export default BigCircleButton