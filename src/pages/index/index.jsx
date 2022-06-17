import { View } from '@tarojs/components'
import React from 'react'
import CaptchaInput from '../../components/CaptchaInput'
import './index.less'

export default class Index extends React.Component {
  state = {
    loading: false,
    status: 'pending'
  }
  onFinish = () => {
    console.log('finish')
    this.setState({
      status: 'success'
    })
  }

  handleTest = () => {
    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
  }
  render() {
    return (
      <View>
        <CaptchaInput format="***-***" status={ this.state.status } onFinish={this.onFinish} />
        <View onClick={this.handleTest}>asdf</View>
      </View>
    )
  }
}