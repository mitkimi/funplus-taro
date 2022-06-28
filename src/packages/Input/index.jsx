import { Image, Input, View } from '@tarojs/components'
import { useState } from 'react'
import ClearBtnImg from './images/clear-btn.png'
import HideBtnImg from './images/hide-btn.png'
import ShowBtnImg from './images/show-btn.png'
import './Input.less'

const InputComponent = ({
    placeholder,
    status,
    onInput,
    disabled,
    type,
    clearable,
    value
  }) => {

  const [inputState, setInputState] = useState(value ? 'inputed' : 'pending')
  const [inputType, setInputType] = useState(type || 'text')

  return (
    <View className={['input-container', `input-${inputState}`, `input-${status}`]}>
      <Input
        className="input-core"
        type={inputType}
        onFocus={() => { setInputState('focus') }}
        onBlur={() => { setInputState(value ? 'inputed' : 'pending') }}
        onInput={(...args) => { onInput(...args) }}
        value={ value }
        disabled={ disabled }
      />
      <View className="right-side-buttons">
        {clearable && <Image onClick={() => {
          // 一键清空数据
          const event = { detail: { value: '' } }
          onInput(event)
          setInputState('pending')
        }} className="side-button" src={ClearBtnImg} />}
        {
          (type === 'password') && (type === inputType ?
            <Image onClick={
              () => setInputType('text')
            } className="side-button" src={ShowBtnImg} /> : 
            <Image onClick={
              () => setInputType('password')
            } className="side-button" src={HideBtnImg} />)
        }
      </View>
    </View>
  )
}

export default InputComponent