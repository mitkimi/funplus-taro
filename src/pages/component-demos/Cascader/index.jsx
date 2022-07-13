import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Cascader.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Button from '../../../packages/Button'
import Cascader from '../../../packages/Cascader'


const options1 = [
  {
    label: '北京', value: 'beijing', children: [
      {
        label: '市辖区', value: 'beijing-area', children: [
          { label: '东城区', value: 'dongcheng' },
          { label: '西城区', value: 'xicheng' },
          { label: '丰台区', value: 'fengtai' },
          { label: '海淀区', value: 'haidian' },
          { label: '朝阳区', value: 'chaoyang' }
      ] },
      {
        label: '郊区县', value: 'beijing-county', children: [
          { label: '密云区', value: 'miyun' },
          { label: '平谷区', value: 'pinggu' },
          { label: '大兴区', value: 'daxing' }
      ] }
    ]
  },
  {
    label: '黑龙江省', value: 'heilongjiang', children: [
      { label: '哈尔滨市', value: 'harbin', children: [
          { label: '道里区', value: 'daoli' },
          { label: '南岗区', value: 'nangang' },
          { label: '平房区', value: 'pingfang' }
      ] },
      { label: '鹤岗市', value: 'hegang', children: [
          { label: '兴安区', value: 'xingan' },
          { label: '其他区', value: 'hegangqita' }
      ] },
      { label: '佳木斯市', value: 'jiamusi', children: [
          { label: '其他区', value: 'jmsqita' }
      ] }
    ]
  },
]

const options2 = [
  [
    { label: '第一个选项', value: 'option_1' },
    { label: '第二个选项', value: 'option_2' },
    { label: '第三个选项', value: 'option_3' }
  ],
  [
    { label: '选项 1.1', value: 'option_1_1' },
    { label: '选项 1.2', value: 'option_1_2' },
    { label: '选项 1.3', value: 'option_1_3' }
  ],
  [
    { label: '选项 1.1.1', value: 'option_1_1_1' },
    { label: '选项 1.2.2', value: 'option_1_2_2' },
    { label: '选项 1.3.3', value: 'option_1_3_3' }
  ]
]
export default class SelectDemoPage extends React.Component {
  state = {
    singleSelectOpen1: false,
    singleSelectValue1: null,
    singleSelectOpen2: false,
    singleSelectValue2: null
  }

  handleSelectSubmit1 = (val) => {
    this.setState({ singleSelectValue1: val })
  }
   handleSelectSubmit2 = (val) => {
    this.setState({ singleSelectValue2: val })
  }

  render() {
    const { singleSelectValue1, singleSelectValue2 } = this.state
    return (
      <View>
        <DemoPageTitle title="Cascader" icon={ComponentIcon}>级联选择器</DemoPageTitle>
        <DemoBlock name="方法一" tips="options 的元素为对象，使用 children 设定下一级。适合一次性全部获取选项使用">
          <View style={{ marginTop: 10 }}>
            <Button onClick={() => { this.setState({ singleSelectOpen1: true }) }}>打开选择器</Button>
            {singleSelectValue1 && <View>
              <View>上次选择的值：</View>
              <View>{JSON.stringify(singleSelectValue1)}</View>
            </View>}
            <Cascader open={this.state.singleSelectOpen1} value={this.state.singleSelectValue1} options={options1} title="自定义标题 1" onSubmit={this.handleSelectSubmit1} onClose={() => { this.setState({ singleSelectOpen1: false }) }}></Cascader>
          </View>
        </DemoBlock>
        <DemoBlock name="方法二" tips="options 的元素为数组，适合异步获取下一级选项使用">
          <View style={{ marginTop: 10 }}>
            <Button onClick={() => { this.setState({ singleSelectOpen2: true }) }}>打开选择器</Button>
            {singleSelectValue2 && <View>
              <View>上次选择的值：</View>
              <View>{JSON.stringify(singleSelectValue2)}</View>
            </View>}
            <Cascader open={this.state.singleSelectOpen2} value={this.state.singleSelectValue2} options={options2} title="自定义标题 2" onSubmit={this.handleSelectSubmit2} onClose={() => { this.setState({ singleSelectOpen2: false }) }}></Cascader>
          </View>
        </DemoBlock>
      </View>
    )
  }
}