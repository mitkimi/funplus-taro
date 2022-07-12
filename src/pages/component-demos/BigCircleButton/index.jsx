import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/BigCircleButton.png'
import '../../../assets/styles/page.less'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import BigCircleButton from '../../../packages/BigCircleButton'

export default class BigCircleButtonDemoPage extends React.Component {
  render() {
    return (
      <View className="demo-page">
        <DemoPageTitle title="Big Circel Button" icon={ComponentIcon}>唯一按钮</DemoPageTitle>
        <DemoBlock name="标准尺寸" tips="size = middle 或不设置，为标准尺寸按钮。">
          <View style={{ marginTop: 60, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <BigCircleButton>一键登录</BigCircleButton>
          </View>
        </DemoBlock>
        <DemoBlock name="大尺寸" tips="size = large 时，为大号按钮。">
          <View style={{ marginTop: 60, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <BigCircleButton size="large">一键登录</BigCircleButton>
          </View>
        </DemoBlock>
        <DemoBlock name="样式" tips="theme = light/halo/ripple">
          <View style={{ marginTop: 60, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <BigCircleButton theme="light">一键登录</BigCircleButton>
          </View>
          <View style={{ marginTop: 60, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <BigCircleButton theme="halo">一键登录</BigCircleButton>
          </View>
          <View style={{ marginTop: 60, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <BigCircleButton theme="ripple">一键登录</BigCircleButton>
          </View>
        </DemoBlock>
      </View>
    )
  }
}