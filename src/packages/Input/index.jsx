import { Image, Input, View } from '@tarojs/components'
import { useState } from 'react'
import ClearBtnImg from './images/clear-btn.png'
import HideBtnImg from './images/hide-btn.png'
import ShowBtnImg from './images/show-btn.png'
import './Input.less'

const InputComponent = ({
    placeholder,
    preValue,
    status,
    onInput,
    disabled,
    type,
    clearable,
    suffix,
    value
  }) => {

  const [inputState, setInputState] = useState(value ? 'inputed' : 'pending')
  const [inputType, setInputType] = useState(type || 'text')
  const handleSetInput = (val) => {
    onInput({ detail: { value: val } })
    setInputState('inputed')
  }
  return (
    <View className={['input-container', `input-${inputState}`, `input-${status}`]}>
      <Input
        className="input-core"
        type={inputType}
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
      <View className="right-side-buttons">
        {clearable && value && <Image onClick={() => {
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
        {
          suffix && <View className="suffix">{ suffix }</View>
        }
      </View>
    </View>
  )
}

export default InputComponent