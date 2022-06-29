import { View } from '@tarojs/components'
import './Radio.less'

const Radio = ({ value, align, options, onChange }) => {

  const realAlign = align || 'center'
  const selectRadioItem = (next, disabled) => {
    !disabled && onChange(next)
  }
  
  return <View className="radio-group-container">
    {options.map(op => {
      return <View className={['radio-item-container', op.reverse ? 'radio-reverse': '', `radio-${realAlign}`]} onClick={()=> selectRadioItem(op.val, op.disabled)}>
        <View className={['radio', value === op.val ? 'radio-checked' : 'radio-unchecked', op.disabled ? 'radio-disabled' : '']}>
          {value === op.val && <View className="check-icon"></View>}
        </View>
        <View className="slot">{op.slot}</View>
      </View>
    })}
  </View>
}

export default Radio