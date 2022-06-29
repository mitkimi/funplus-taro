import { Image, View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Input.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Button from '../../../packages/Button'
import Input from '../../../packages/Input'
import ScanIcon from './images/scan-btn.png'

export default class InputDemoPage extends React.Component {
  state = {
    normalInputUse: '',
    clearableInputUse: '',
    passwordInputUse: 'password',
    successInputUse: '成功',
    errorInputUse: '报错',
    captchaInputUse: '',
    captchaCountDown: 0,
    preInputUse: ''
  }

  handleInputChange = (event) => {
    this.setState({
      normalInputUse: event.detail.value
    })
  }
  handleClearableInputChange = (event) => {
    this.setState({
      clearableInputUse: event.detail.value
    })
  }
  handlePasswordInputChange = (event) => {
    this.setState({
      passwordInputUse: event.detail.value
    })
  }
  handleCaptchaInputChange = (event) => {
    this.setState({
      passwordInputUse: event.detail.value
    })
  }
  handlePreInputChange = (event) => {
    this.setState({
      preInputUse: event.detail.value
    })
  }
  render() {
    return (
      <View>
        <DemoPageTitle title="Input" icon={ComponentIcon}>输入框</DemoPageTitle>
        <DemoBlock name="一般引用" tips="展示一般的引用方法">
          <View style={{ marginTop: 10 }}>
            <Input
              placeholder="随便输入点什么？"
              value={this.state.normalInputUse}
              onInput={this.handleInputChange}
            />
            {
              this.state.normalInputUse && <View style={{ padding: 10 }}>输入的内容：{ this.state.normalInputUse }</View>
            }
          </View>
        </DemoBlock>
        <DemoBlock name="带有状态的输入框" tips="展示一般的引用方法">
          <View style={{ marginTop: 10 }}>
            <Input
              value={this.state.successInputUse}
              onInput={this.handleInputChange}
              status="success"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Input
              value={this.state.errorInputUse}
              onInput={this.handleInputChange}
              status="error"
            />
          </View>
        </DemoBlock>
        <DemoBlock name="可清除" tips="带有清除按钮的输入框">
          <View style={{ marginTop: 10 }}>
            <Input
              value={this.state.clearableInputUse}
              onInput={this.handleClearableInputChange}
              placeholder="可清除内容的输入框"
              clearable
            />
          </View>
        </DemoBlock>
        <DemoBlock name="密码" tips="密码输入框会出现显示或隐藏密码的眼睛图标">
          <View style={{ marginTop: 10 }}>
            <Input
              value={this.state.passwordInputUse}
              onInput={this.handlePasswordInputChange}
              type="password"
            />
          </View>
        </DemoBlock>
        <DemoBlock name="带有后缀的输入框" tips="用于发送验证码或者其他场景">
          <View style={{ marginTop: 10 }}>
            <Input
              value={this.state.captchaInputUse}
              onInput={this.handleCaptchaInputChange}
              suffix={
                <Button type="link" onClick={() => {
                  this.setState({ captchaCountDown: 10 })
                  const timer = setInterval(() => {
                    const next = this.state.captchaCountDown - 1
                    this.setState({
                      captchaCountDown: next
                    })
                    next <= 0 && clearInterval(timer)
                  }, 1000)
                }} disabled={this.state.captchaCountDown > 0}>{this.state.captchaCountDown <= 0 ? '发送验证码' : `${this.state.captchaCountDown} 秒后再发送`}</Button>
              }
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Input
              suffix={
                <Image style={{ width: 20, height: 20 }} src={ScanIcon} />
              }
            />
          </View>
        </DemoBlock>
        <DemoBlock name="预加载关键字" tips="按照：“关键字1|关键字2” 这样的格式配置与加载关键字，点击到具体关键字时会自动填充">
          <View style={{ marginTop: 10 }}>
            <Input
              value={this.state.preInputUse}
              preValue="微信|飞书"
              onInput={this.handlePreInputChange}
            />
          </View>
        </DemoBlock>
      </View>
    )
  }
}