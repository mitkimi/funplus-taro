import { View } from '@tarojs/components'
import React from 'react'
import CaptchaInput from '../../components/CaptchaInput'

export default class Index extends React.Component {
  state = {
    captcha: ''
  }
  handleCaptchaFinish = (val) => {
    this.setState({
      captcha: val
    })
  }
  render () {
    return (
      <View>
        <CaptchaInput format="****" onFinish={this.handleCaptchaFinish} />
      </View>
    )
  }
}