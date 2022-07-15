import { View } from '@tarojs/components'
import React from 'react'
import BigCircleButton from '../../packages/BigCircleButton'
import Toast from '../../packages/Toast'
import './index.less'

export default class Index extends React.Component {
  state = {
    touches: [],
    open: false,
    type: 'loading',
    tip: '正在链接'
  }

  handleClick = (ec) => {
    const nextArr = ec.touches
    this.setState({
      touches: [
        ...this.state.touches,
        ...nextArr
      ]
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({touches: []})
    }, 5000)
  }

  handleConectWifi = () => {
    this.setState({
      open: true,
      type: 'loading',
      tip: '正在链接 Wifi'
    })
    const that = this
    wx.startWifi({
      success(res) {
        console.log('初始化wifi成功');
        console.log(res);
        wx.connectWifi({
          SSID: 'Davinci_HQ',//你的wifi账号
          password: 'Dav202012!',//你的wifi密码
          success(res) {
            console.log('success')
            console.log(res)
            that.connectOk('success')
          },
          fail(res) {
            that.connectOk('fail')
            console.log(res)
          }
        })
      },
      fail(res) {
        console.log('初始化wifi失败')
        console.log(res)
      }
    })
  }
  
  connectOk = (res) => {
    console.log('res', res)
    res === 'success' && this.setState({
      open: true,
      type: 'success',
      tip: '连接成功'
    })
    res === 'fail' && this.setState({
      open: true,
      type: 'fail',
      tip: '连接失败'
    })
  }

  render() {
    const { open, type, tip } = this.state
    return (
      <View>
        <View>Stamp Testing Page</View>
        <View className="stamp-place" onTouchStart={this.handleClick}>
          Place stamp here
        </View>
        <View className="wifi-place">
          <BigCircleButton onClick={this.handleConectWifi}>一键连Wifi</BigCircleButton>
          <Toast open={open} type={type} title={tip} onClose={() => {
            this.setState({ open: false })
          }}></Toast>
        </View>
      </View>
    )
  }
}