import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/TextArea.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import TextArea from '../../../packages/TextArea'

export default class TextAreaDemoPage extends React.Component {
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
        <DemoPageTitle title="TextArea" icon={ComponentIcon}>文本区域</DemoPageTitle>
        <DemoBlock name="一般引用" tips="展示一般的引用方法">
          <View style={{ marginTop: 10 }}>
            <TextArea
              placeholder="随便输入点什么？"
              value={this.state.normalInputUse}
              onInput={this.handleInputChange}
            />
            {
              this.state.normalInputUse && <View style={{ padding: 10 }}>输入的内容：{ this.state.normalInputUse }</View>
            }
          </View>
        </DemoBlock>
      </View>
    )
  }
}