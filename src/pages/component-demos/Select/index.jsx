import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Selector.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import TextArea from '../../../packages/TextArea'

export default class SelectDemoPage extends React.Component {
  state = {
  }

  render() {
    return (
      <View>
        <DemoPageTitle title="Select" icon={ComponentIcon}>选择器</DemoPageTitle>
        <DemoBlock name="一般引用" tips="展示一般的引用方法">
          <View style={{ marginTop: 10 }}>
            <TextArea
              placeholder="随便输入点什么？"
              value={this.state.normalInputUse}
              onInput={this.handleInputChange}
            />
          </View>
        </DemoBlock>
      </View>
    )
  }
}