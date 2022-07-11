import { Image, View } from '@tarojs/components'
import React from 'react'
import Logo from '../../assets/images/logo-transparent.png'
import './about.less'

export default class HomePage extends React.Component {
  
  render() {
    return (
      <View className="home-page-container">
        <View className="logo-area">
          <Image className="logo-image" src={Logo} />
          <View className="app-name">FunPlus UI</View>
          <View className="app-sub-title">(For Taro)</View>
        </View>
        <View className="copyright">&copy; funplus taro</View>
      </View>
    )
  }
}