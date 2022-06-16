import { View } from '@tarojs/components'
import React from 'react'
import CaptchaInput from '../../components/CaptchaInput'
import './index.less'

export default class Index extends React.Component {
  state = {
    loading: false
  }
  onFinish = () => {
    console.log('finish')
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
        <CaptchaInput format="***-***" theme="dark" onFinish={this.onFinish} />
        <View onClick={this.handleTest}>asdf</View>
      </View>
    )
  }
}