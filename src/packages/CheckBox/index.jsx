import { Image, View } from '@tarojs/components'
import './CheckBox.less'
import CheckIcon from './images/check-icon.png'

const CheckBox = ({ value, children, onChange, disabled, align, reverse }) => {
  const realAlign = align || 'center'
  const checkboxChange = (val) => {
    const nextValue = !val
    onChange && !disabled && onChange(nextValue)
  }
  return <View className={['checkbox-container', reverse ? 'checkbox-reverse' : '']}>
    <View className={['checkbox', `checkbox-${realAlign}`, value ? 'checkbox-checked' : 'checkbox-unchecked', disabled ? 'checkbox-disabled' : '']} onClick={() => checkboxChange(value)}>
      {value && <Image className="check-icon" src={CheckIcon} />}
    </View>
    <View className="slot">{ children }</View>
  </View>
}

export default CheckBox