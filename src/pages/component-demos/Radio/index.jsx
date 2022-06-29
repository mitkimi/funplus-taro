import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Radio.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Radio from '../../../packages/Radio'
import '../CheckBox/CheckBoxDemo.less'

export default class RadioDemoPage extends React.Component {
  state = {
    radioValue: 1
  }
  handleRadioChange = (next) => {
    this.setState({
      radioValue: next
    })
  }
  render() {
    return (
      <View>
        <DemoPageTitle title="Radio" icon={ComponentIcon}>单选按钮</DemoPageTitle>
        <DemoBlock name="基础使用" tips="多个单选按钮组成一个可以用来单选的组">
          <View style={{ marginTop: 10 }}>
            <Radio
              value={this.state.radioValue}
              options={[
                {
                  val: 1,
                  slot: '我是选项 1'
                },
                {
                  val: 2,
                  slot: '我是选项 2'
                },
                {
                  val: 3,
                  slot: '我是选项 3'
                }
              ]}
              onChange={this.handleRadioChange}
            ></Radio>
          </View>
        </DemoBlock>
        <DemoBlock name="对齐" tips="整体设置对齐方式">
          <View style={{ marginTop: 10 }}>
            <Radio
              value={this.state.radioValue}
              align="top"
              options={[
                {
                  val: 1,
                  slot: <View className="high-demo">我是选项 1</View>
                },
                {
                  val: 2,
                  slot: <View className="high-demo">我是选项 2</View>
                },
                {
                  val: 3,
                  slot: <View className="high-demo">我是选项 3</View>
                }
              ]}
              onChange={this.handleRadioChange}
            ></Radio>
          </View>
        </DemoBlock>
        <DemoBlock name="禁用" tips="单个禁用选项">
          <View style={{ marginTop: 10 }}>
            <Radio
              value={this.state.radioValue}
              options={[
                {
                  val: 1,
                  disabled: true,
                  slot: '我是选项 1（已禁用）'
                },
                {
                  val: 2,
                  disabled: true,
                  slot: '我是选项 2（已禁用）'
                },
                {
                  val: 3,
                  slot: '我是选项 3（未禁用）'
                }
              ]}
              onChange={this.handleRadioChange}
            ></Radio>
          </View>
        </DemoBlock>
        <DemoBlock name="操作位置" tips="单个反转选项操作点">
          <View style={{ marginTop: 10 }}>
            <Radio
              value={this.state.radioValue}
              options={[
                {
                  val: 1,
                  reverse: true,
                  slot: '我是选项 1（已反转）'
                },
                {
                  val: 2,
                  reverse: true,
                  slot: '我是选项 2（已反转）'
                },
                {
                  val: 3,
                  slot: '我是选项 3（未禁用）'
                }
              ]}
              onChange={this.handleRadioChange}
            ></Radio>
          </View>
        </DemoBlock>
      </View>
    )
  }
}