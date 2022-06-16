import { View } from '@tarojs/components'
import React from 'react'
import './CaptchaInput.less'

export default class CaptchaInput extends React.Component {
  constructor(props) {
    super(props)
    const render = []
    const format = (props.format || '****').split('')
    console.log(format)
    format.map((char, i) => {
      if (char === '*') {
        render.push({
          type: 'block',
          i
        })
      } else {
        render.push({
          type: 'devider',
          i,
          val: char
        })
      }
    })
    this.state = {
      render
    }
  }

  handleFocus = () => {
    this.refs.captchaInputEntity.focus()
  }

  onInputEntityChange = (event) => {
    console.log(event)
  }
  render () {
    const { render } = this.state
    return (
      <View className="captcha-input" onClick={ () => {this.handleFocus()} }>
        {
          render.map((e) => {
            return e.type === 'block' ?
              <View className="input-block">*</View>
              :
              <View className="devider">
                {e.val}
              </View>
          })
        }
        <input ref="captchaInputEntity" onChange={this.onInputEntityChange} />
      </View>
    )
  }
}