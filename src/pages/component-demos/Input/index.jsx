import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Input.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Input from '../../../packages/Input'

export default class InputDemoPage extends React.Component {
  state = {
    normalInputUse: '',
    clearableInputUse: '',
    passwordInputUse: 'password',
    successInputUse: '成功',
    errorInputUse: '报错'
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
  render() {
    return (
      <View>
        <DemoPageTitle title="Input" icon={ComponentIcon}>输入框</DemoPageTitle>
        <DemoBlock name="一般引用" tips="展示一般的引用方法">
          <View style={{ marginTop: 10 }}>
            <Input
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
              clearable
            />
          </View>
        </DemoBlock>
        <DemoBlock name="密码" tips="密码输入框会出现显示或隐藏密码的图表">
          <View style={{ marginTop: 10 }}>
            <Input
              value={this.state.passwordInputUse}
              onInput={this.handlePasswordInputChange}
              type="password"
            />
          </View>
        </DemoBlock>
      </View>
    )
  }
}