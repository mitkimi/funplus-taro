import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/CaptchaInput.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import CaptchaInput from '../../../packages/CaptchaInput'

export default class CaptchaInputDemoPage extends React.Component {
  render() {
    return (
      <View>
        <DemoPageTitle title="Captcha Input" icon={ComponentIcon}>验证码输入器</DemoPageTitle>
        <DemoBlock name="渲染方式" tips="根据传入 format 来设置，例如：format=***-***">
          <View style={{ marginTop: 10 }}>
            <CaptchaInput format="***-***"/>
          </View>
        </DemoBlock>
        <DemoBlock name="深色模式" tips="设置底色为深色时，使用深色模式。">
          <View style={{ marginTop: 10, background: '#0c508f', padding: '40px 0' }}>
            <CaptchaInput theme="dark" format="****"/>
          </View>
        </DemoBlock>
        <DemoBlock name="状态" tips="status = success/fail">
          <View style={{ marginTop: 10 }}>
            <CaptchaInput status="success" format="****"/>
          </View>
          <View style={{ marginTop: 10 }}>
            <CaptchaInput status="fail" format="****"/>
          </View>
          <View style={{ marginTop: 10, background: '#0c508f', padding: '40px 0' }}>
            <CaptchaInput theme="dark" status="success" format="****"/>
          </View>
          <View style={{ background: '#0c508f', padding: '0 0 40px 0' }}>
            <CaptchaInput theme="dark" status="fail" format="****"/>
          </View>
        </DemoBlock>
      </View>
    )
  }
}