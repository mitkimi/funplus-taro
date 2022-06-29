import { View } from '@tarojs/components'
import './Switch.less'

const Switch = ({ value, onChange, disabled }) => {
  const handleSwitchChange = (val) => {
    const next = !val
    !disabled && onChange(next)
  }
  
  return <View className={['switch-container', `switch-${value ? 'on' : 'off'}`]} onClick={() => handleSwitchChange(value)}>
    <View className="switch-button"></View>
  </View>
}

export default Switch