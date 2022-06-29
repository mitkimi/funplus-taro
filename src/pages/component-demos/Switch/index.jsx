import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Switch.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Switch from '../../../packages/Switch'

export default class BigCircleButtonDemoPage extends React.Component {
  state = {
    switchValue: false
  }

  handleSwitchChange = (next) => {
    this.setState({
      switchValue: next
    })
  }
  render() {
    return (
      <View>
        <DemoPageTitle title="Switch" icon={ComponentIcon}>开关</DemoPageTitle>
        <DemoBlock name="基础使用" tips="正常的开关">
          <View style={{ marginTop: 10 }}>
            <Switch value={this.state.switchValue} onChange={this.handleSwitchChange}></Switch>
          </View>
        </DemoBlock>
      </View>
    )
  }
}