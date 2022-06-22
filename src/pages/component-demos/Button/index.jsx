import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Button.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Button from '../../../packages/Button'

export default class ButtonDemoPage extends React.Component {
  render() {
    return (
      <View>
        <DemoPageTitle title="Button" icon={ComponentIcon}>按钮</DemoPageTitle>
        <DemoBlock name="按钮类型" tips="分别展示 5 种按钮类型">
          <View style={{ marginTop: 10 }}><Button type="primary">Primary Button</Button></View>
          <View style={{ marginTop: 10 }}><Button>Default Button</Button></View>
          <View style={{ marginTop: 10 }}><Button type="dashed">Dashed Button</Button></View>
          <View style={{ marginTop: 10 }}><Button type="text">Text Button</Button></View>
          <View style={{ marginTop: 10 }}><Button type="link">Link Button</Button></View>
        </DemoBlock>
        <DemoBlock name="隐藏的按钮类型" tips="实际的开发过程中，我们发现需要一个简易按钮，跟默认按钮非常接近，但要更次级。因此我们设计了一个二级按钮。在非常少的场景使用。">
          <Button type="secondary">Secondary Button</Button>
        </DemoBlock>
        <DemoBlock name="沾满整行" tips="在一些表单场景需要使按钮占满整行。">
          <Button type="primary" fluid>Fluid Button</Button>
        </DemoBlock>
        <DemoBlock name="危险按钮" tips="危险应该是一种属性，而不应该是一种类型。">
          <View style={{ marginTop: 10 }}>
            <Button type="primary">Primary Button</Button>
            <Button type="primary" danger>Primary Button</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button>Default Button</Button>
            <Button danger>Default Button</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button type="dashed">Dashed Button</Button>
            <Button type="dashed" danger>Dashed Button</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button type="text">Text Button</Button>
            <Button type="text" danger>Text Button</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button type="link">Link Button</Button>
            <Button type="link" danger>Link Button</Button>
          </View>
        </DemoBlock>
        <DemoBlock name="加载中" tips="只要给组件加上 loading 属性即可展示加载中状态。">
          <View style={{ marginTop: 10 }}>
            <Button type="primary" loading>Primary Button</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button loading>Default Button</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button type="dashed" loading>Dashed Button</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button type="secondary" loading>Secondary Button</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button type="text" loading>Text Button</Button>
          </View>
        </DemoBlock>
        <DemoBlock name="禁用">
          <View style={{ marginTop: 10 }}>
            <Button type="primary" disabled>Primary Button</Button>
            <Button disabled>Default Button</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button type="dashed" disabled>Dashed Button</Button>
            <Button type="secondary" disabled>Secondary Button</Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button type="text" disabled>Text Button</Button>
          </View>
        </DemoBlock>
      </View>
    )
  }
}