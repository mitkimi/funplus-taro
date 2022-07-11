import { Textarea, View } from '@tarojs/components'
import { useState } from 'react'
import './TextArea.less'

const InputComponent = ({
    placeholder,
    preValue,
    status,
    onInput,
    disabled,
    value
  }) => {

  const [inputState, setInputState] = useState(value ? 'inputed' : 'pending')
  const handleSetInput = (val) => {
    onInput({ detail: { value: val } })
    setInputState('inputed')
  }
  return (
    <View className={['input-container', `input-${inputState}`, `input-${status}`]}>
      <Textarea
        className="input-core"
        onFocus={() => { setInputState('focus') }}
        onBlur={() => { setInputState(value ? 'inputed' : 'pending') }}
        onInput={(...args) => { onInput(...args) }}
        value={ value }
        placeholder={ preValue || placeholder }
        disabled={ disabled }
      />
      {preValue && !value && inputState !== 'focus' && ((str) => {
        const arr = str.split('|')
        return <View className="hot-click-container">
          {arr.map(e => {
            return <View className="hot-click-field" onClick={() => {
              handleSetInput(e)
            }}>{e}</View>
          })}
        </View>
      })(preValue)}
    </View>
  )
}

export default InputComponent