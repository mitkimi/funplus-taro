import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/CheckBox.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import CheckBox from '../../../packages/CheckBox'
import './CheckBoxDemo.less'

export default class BigCircleButtonDemoPage extends React.Component {
  state = {
    check1: true
  }
  onCheck1Change = (next) => {
    this.setState({ check1: next })
  }
  render() {
    return (
      <View>
        <DemoPageTitle title="CheckBox" icon={ComponentIcon}>多选按钮</DemoPageTitle>
        <DemoBlock name="基础使用">
          <View style={{ marginTop: 10 }}>
            <CheckBox value={this.state.check1} onChange={this.onCheck1Change}>我是一个多选按钮</CheckBox>
          </View>
          <View style={{ marginTop: 10 }}>
            <CheckBox value={this.state.check1} disabled>我是一个禁用了的多选按钮</CheckBox>
          </View>
        </DemoBlock>
        <DemoBlock name="对齐">
          <View style={{ marginTop: 10 }}>
            <CheckBox value={this.state.check1} onChange={this.onCheck1Change}>
              <View className="high-demo">我是一个居中对齐的单选按钮</View>
            </CheckBox>
          </View>
          <View style={{ marginTop: 10 }}>
            <CheckBox value={this.state.check1} align="top">
              <View className="high-demo">我是一个顶端对齐的多选按钮</View>
            </CheckBox>
          </View>
          <View style={{ marginTop: 10 }}>
            <CheckBox value={this.state.check1} align="top">我是一个多行顶端对齐的多选按钮，因为我的内容很长很长，需要两行才能展示出来。</CheckBox>
          </View>
        </DemoBlock>
        <DemoBlock name="操作位置">
          <View style={{ marginTop: 10 }}>
            <CheckBox value={this.state.check1} onChange={this.onCheck1Change}>我是一个在左边的多选按钮</CheckBox>
          </View>
          <View style={{ marginTop: 10 }}>
            <CheckBox value={this.state.check1} onChange={this.onCheck1Change} reverse>我是一个在右边的多选按钮</CheckBox>
          </View>
        </DemoBlock>
      </View>
    )
  }
}