import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Selector.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Button from '../../../packages/Button'
import Select from '../../../packages/Select'

const options = [
  { label: '第一个选项', value: 'option_1' },
  { label: '第二个选项', value: 'option_2' },
  { label: '第三个选项', value: 'option_3' },
  { label: '第四个选项', value: 'option_4' },
  { label: '第五个选项', value: 'option_5' },
  { label: '第六个选项', value: 'option_6' },
  { label: '第七个选项', value: 'option_7' },
  { label: '第八个选项', value: 'option_8' }
]

export default class SelectDemoPage extends React.Component {
  state = {
    singleSelectOpen: false,
    singleSelectValue: null
  }

  handleSelectSubmit = (val) => {
    this.setState({ singleSelectValue: val })
  }

  render() {
    const { singleSelectValue } = this.state
    return (
      <View>
        <DemoPageTitle title="Select" icon={ComponentIcon}>选择器</DemoPageTitle>
        <DemoBlock name="单选" tips="展示一般的引用方法">
          <View style={{ marginTop: 10 }}>
            <Button onClick={() => { this.setState({ singleSelectOpen: true }) }}>打开选择器</Button>
            {singleSelectValue && <View>
              <View>上次选择的值：{singleSelectValue}</View>
              <View>Label 为：{ options.map(e => { return e.value === singleSelectValue ? e.label : ''})}</View>
            </View>}
            <Select open={this.state.singleSelectOpen} value={this.state.singleSelectValue} options={options} title="自定义标题" onSubmit={this.handleSelectSubmit} onClose={() => { this.setState({ singleSelectOpen: false }) }}></Select>
          </View>
        </DemoBlock>
      </View>
    )
  }
}