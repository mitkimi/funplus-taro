import { View, Input, Image } from '@tarojs/components'
import React from 'react'
import LoadingImage from './images/loading-icon.svg'
import './CaptchaInput.less'

const CaptchaInput = ({
  format,
  // value,
  theme,
  status,
  onFinish
}) => {
  const render = []
  const inputRef = React.useRef(null)
  const formatArr = (format || '****').split('')
  let maxLength = 0
  const [val, setVal] = React.useState(null)
  const [inputFocused, setInputFocused] = React.useState(false)
  const nextStatus = status || 'pending'
  const nextTheme = theme || 'light'
  formatArr.map((char, i) => {
    if (char === '*') {
      render.push({
        type: 'block',
        i,
        numberIndex: maxLength
      })
      maxLength ++
    } else {
      render.push({
        type: 'devider',
        i,
        val: char
      })
    }
  })

  const handleFocus = () => {
    inputRef.current.focus()
    setInputFocused(true)
  }

  const handleBlur = () => {
    inputRef.current.blur()
    setInputFocused(false)
  }

  const onInputEntityChange = (e) => {
    setVal(e.detail.value)
    if (e.detail.value.length >= maxLength) {
      handleBlur()
      onFinish(e.detail.value)
    }
  }

  const getCurrentSingleNumber = (value, index) => {
    let ret = ''
    if (typeof value === 'string') {
      ret = value.split('')[index]
    }
    return ret
  }

  const getCurrentBlock = (value, index) => {
    return inputFocused && ((typeof value === 'string' && value.length === index) || (typeof value !== 'string' && index === 0))
  }
  const getBeforeCurrentBlock = (value, index) => {
    return typeof value === 'string' && value.length > index
  }

  return (
    <View className={[
      'captcha-input',
      nextTheme === 'dark' ? 'captcha-input-dark' : '',
      `captcha-input-${nextStatus}`
    ]} onClick={ handleFocus }>
      {
        render.map((e) => {
          return e.type === 'block' ?
            <View className={[
              'input-block',
              getCurrentBlock(val, e.numberIndex) ? 'current' : '',
              getBeforeCurrentBlock(val, e.numberIndex) ? 'before-current' : ''
            ]}>{getCurrentSingleNumber(val, e.numberIndex)}</View>
            :
            <View className="devider">
              {e.val}
            </View>
        })
      }
      <Input className="captcha-input-entity"
        ref={inputRef}
        type="number"
        value={ val }
        maxlength={ maxLength }
        onBlur={ handleBlur }
        onInput={ onInputEntityChange } />
    </View>
  )
}

export default CaptchaInput