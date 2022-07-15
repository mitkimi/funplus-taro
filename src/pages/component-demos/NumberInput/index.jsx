import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/NumberInput.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'

export default class BigCircleButtonDemoPage extends React.Component {
  state = {
    switchValue: false
  }

  render() {
    return (
      <View>
        <DemoPageTitle title="NumberInput" icon={ComponentIcon}>数字输入框</DemoPageTitle>
        <DemoBlock name="基础使用">
          <View style={{ marginTop: 10 }}>
            等等
          </View>
        </DemoBlock>
      </View>
    )
  }
}