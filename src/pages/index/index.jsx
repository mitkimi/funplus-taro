import { View } from '@tarojs/components'
import React from 'react'
import CaptchaInput from '../../components/CaptchaInput'

export default class Index extends React.Component {

  state = {
    status: 'pending'
  }

  onFinish = () => {
    this.setState({
      status: 'success'
    })
  }
  render() {
    return (
      <View style={{ padding: '137.5px 0'}}>
        <CaptchaInput status={this.state.status} format="***-***" onFinish={this.onFinish} autofocus></CaptchaInput>
      </View>
    )
  }
}