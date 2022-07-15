import { Image, Text, View } from '@tarojs/components'
import React from 'react'
import './icon.less'
import IconPark from './images/iconpark.svg'

export default class IconPage extends React.Component {
  render() {
    return (
      <View className="icon-page">
        <View className="intro" style={{ fontSize: 16, color: '#1B80DD' }}>
          <View>我们推荐使用字节跳动的开源图标库</View>
        </View>
        <Image className="icon-park" src={IconPark} />
        <View className="intro">
          FunPlus UI 是在实际项目中同时开发产生的。此实际项目在设计图标时大量使用了 iconpark 作为参考，并且根据自己的 UI 风格进行了部分细节的调整（例如线条粗细等）。因此，FunPlus UI 本身并没有内置图标。 
        </View>
        <View className="intro">
          我们并非拒绝在 FunPlus UI 中内置图标，也并非拒绝其他优秀的图标库（例如 Awesome Icon 等等）。我们觉得在实际的项目开发中，每个项目会根据自己的实际情况去设计图标。而 FunPlus UI 又能够很好的兼容各种图标。因此为了避免开发者以及设计师的思路被限制，我们觉得没有必要过早的设计图标用于组件库中。
        </View>
        <View style={{ color: '#999999', textAlign: 'center', marginTop: 50 }}>
          访问：<Text style={{ color: '#4c9eea' }}>https://iconpark.bytedance.com</Text>
        </View>
      </View>
    )
  }
}