import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/NumberInput.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import NumberInput from '../../../packages/NumberInput'

export default class BigCircleButtonDemoPage extends React.Component {
  state = {
    inputValue: 1
  }

  handleInputChange = (next) => {
    console.log(next)
    this.setState({
      inputValue: next
    })
  }
  render() {
    return (
      <View>
        <DemoPageTitle title="NumberInput" icon={ComponentIcon}>数字输入框</DemoPageTitle>
        <DemoBlock name="基础使用">
          <View style={{ marginTop: 10 }} tips="设置 onInput 属性（是个方法）即可获取输入框的值">
            <NumberInput value={this.state.inputValue} onInput={this.handleInputChange}></NumberInput>
            <View>
              当前输入值: {this.state.inputValue}
            </View>
          </View>
        </DemoBlock>
        <DemoBlock name="设置默认值">
          <View style={{ marginTop: 10 }} tips="设置 defaultValue 属性配置默认显示的值">
            <NumberInput defaultValue={3}></NumberInput>
          </View>
        </DemoBlock>
        <DemoBlock name="设置最小值、最大值" tips="设置 min/max 属性（Number）">
          <View style={{ marginTop: 10 }}>
            <NumberInput defaultValue={10} min={10} max={15}></NumberInput>
          </View>
        </DemoBlock>
      </View>
    )
  }
}