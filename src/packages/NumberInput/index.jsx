import { Input, View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import './NumberInput.less'

const NumberInput = ({
  value,
  defaultValue,
  onInput,
  max,
  min
}) => {
  const [edgeClassName, setEdgeClass] = useState()
  const [val, setValue] = useState(value || defaultValue || 1)
  
  // 监控
  useEffect(() => {
    if (max && val >= max) setEdgeClass('number-input-reach-max')
    else if (min && val <= min || val <= 1) setEdgeClass('number-input-reach-min')
    else setEdgeClass('default')
  }, [max, min, val])
  
  // 手动输入
  const handleNumberInput = (e) => {
    let nextValue = e.detail.value
    // 判断值是否在 max 和 min 之间
    if (max && nextValue > max) nextValue = max
    if (min && nextValue < min) nextValue = min
    setValue(nextValue)
    onInput && onInput(nextValue)
  }

  const numberIncrease = () => {
    if (max && val >= max) return
    const nextValue = val + 1
    setValue(nextValue)
    onInput && onInput(nextValue)
  }

  const numberDecrease = () => {
    if (min && val <= min || val <= 1) return
    const nextValue = val - 1
    setValue(nextValue)
    onInput && onInput(nextValue)
  }
  
  return (
    <View className={`number-input-container ${edgeClassName}`}>
      <View className={`op-btn btn-minus ${edgeClassName === 'number-input-reach-min' ? 'op-btn-disabled' : ''}`} disabled={edgeClassName === 'number-input-reach-min'} onClick={numberDecrease}>-</View>
      <View className="number-input-core-container">
        <Input value={val} className="number-input-core" type="number" onInput={handleNumberInput} />
      </View>
      <View className={`op-btn btn-plus ${edgeClassName === 'number-input-reach-max' ? 'op-btn-disabled' : ''}`} disabled={edgeClassName === 'number-input-reach-max'} onClick={numberIncrease}>+</View>
    </View>
  )
}

export default NumberInput