import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Drawer.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Button from '../../../packages/Button'
import Drawer from '../../../packages/Drawer'

export default class SelectDemoPage extends React.Component {
  state = {
    placement: 'right',
    normalDemoOpen: false
  }

  render() {
    return (
      <View>
        <DemoPageTitle title="Drawer" icon={ComponentIcon}>抽屉</DemoPageTitle>
        <DemoBlock name="一般引用" tips="展示一般的引用方法">
          <View style={{ marginTop: 10 }}>
            <Button onClick={() => {
              this.setState({
                placement: 'right',
                normalDemoOpen: true
              })
            }}>默认：右侧打开</Button>
            <Button onClick={() => {
              this.setState({
                placement: 'left',
                normalDemoOpen: true
              })
            }}>左侧打开</Button>
          </View>
        </DemoBlock>
        <DemoBlock name="底部打开" tips="用作某些场景下的底部操作">
          <View style={{ marginTop: 10 }}>
            <Button onClick={() => {
              this.setState({
                placement: 'bottom',
                normalDemoOpen: true
              })
            }}>底部打开</Button>
          </View>
        </DemoBlock>
        <Drawer open={this.state.normalDemoOpen} closeable placement={this.state.placement} onClose={() => { this.setState({ normalDemoOpen: false }) }}>这里是内容的部分</Drawer>
      </View>
    )
  }
}