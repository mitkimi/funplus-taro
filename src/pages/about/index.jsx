import { Image, View } from '@tarojs/components'
import React from 'react'
import Logo from '../../assets/images/logo-transparent.png'
import DemoBlock from '../../components/DemoBlock'
import './about.less'
import ABCD from './team/abcd.jpg'
import HI from './team/hi.jpg'
import KIMI from './team/kimi.jpg'
import MINIOCEAN from './team/miniocean.jpg'
import PAUL from './team/paul.jpg'
import RITIAN from './team/ritianjun.jpg'
import THOMAS from './team/thomas.jpg'
import TONG from './team/tong.jpg'
import XINZAI from './team/xinzai.jpg'
import YUNLOO from './team/yunloo.jpg'

export default class AboutPage extends React.Component {
  
  render() {
    return (
      <View className="about-page-container">
        {/* <View className="logo-area">
          <Image className="logo-image" src={Logo} />
          <View className="app-name">FunPlus UI</View>
          <View className="app-sub-title">(For Taro)</View>
        </View>
        <View className="copyright">&copy; funplus taro</View> */}
        <View className="about-title">
          <Image src={Logo} className="logo" />
          <View className="title-text">FunPlus UI</View>
        </View>
        <DemoBlock name="Intro">
          <View className="paragrams">FunPlus UI 是一套具有统一设计风格、活泼且不躁动的前端组件库。</View>
          <View className="paragrams">在设计时，FunPlus 参考了 arco design、ant design 等的设计价值观和 Element UI 的设计原则。遵循自然、仪式感和做减法的原则。</View>
        </DemoBlock>
        <DemoBlock name="感谢">
          <View className="paragrams">我们的图标库大量的使用了字节跳动的开源图标库 IconPark，并且在此基础上部分图标进行了修改或者重绘。</View>
          <View className="paragrams">在此，十分感谢字节跳动 IconPark 项目。</View>
        </DemoBlock>
        <DemoBlock name="开发者">
          <View className="developer-list">
            <View className="developer-item">
              <View className="avatar">
                <Image className="real-avatar" src={KIMI} />
              </View>
              <View className="name">田昊天</View>
              <View className="job">
                <View>主程/UI 设计/交互</View>
                <View>FunPlus 设计者</View>
              </View>
            </View>
          </View>
          <View className="developer-list">
            <View className="developer-item">
              <View className="avatar">
                <Image className="real-avatar" src={XINZAI} />
              </View>
              <View className="name">鑫仔</View>
              <View className="job">交互设计与研发</View>
            </View>
            <View className="developer-item">
              <View className="avatar">
                <Image className="real-avatar" src={ABCD} />
              </View>
              <View className="name">甲乙丙丁</View>
              <View className="job">主程/交互</View>
            </View>
            <View className="developer-item">
              <View className="avatar">
                <Image className="real-avatar" src={MINIOCEAN} />
              </View>
              <View className="name">我叫小海洋啊</View>
              <View className="job">交互研发</View>
            </View>
          </View>
        </DemoBlock>
        <DemoBlock name="团队成员">
          <View className="developer-list">
            <View className="developer-item">
              <View className="avatar">
                <Image className="real-avatar" src={THOMAS} />
              </View>
              <View className="name">I'm Thomas</View>
              <View className="job">统筹</View>
            </View>
            <View className="developer-item">
              <View className="avatar">
                <Image className="real-avatar" src={YUNLOO} />
              </View>
              <View className="name">yunloo</View>
              <View className="job">交互/推广</View>
            </View>
            <View className="developer-item">
              <View className="avatar">
                <Image className="real-avatar" src={TONG} />
              </View>
              <View className="name">Tovi-Liu</View>
              <View className="job">视觉</View>
            </View>
            <View className="developer-item">
              <View className="avatar">
                <Image className="real-avatar" src={RITIAN} />
              </View>
              <View className="name">日天君</View>
              <View className="job">用户体验/文案</View>
            </View>
            <View className="developer-item">
              <View className="avatar">
                <Image className="real-avatar" src={PAUL} />
              </View>
              <View className="name">Paul</View>
              <View className="job">AI/数据支持</View>
            </View>
            <View className="developer-item">
              <View className="avatar">
                <Image className="real-avatar" src={HI} />
              </View>
              <View className="name">Hi！</View>
              <View className="job">用户体验</View>
            </View>
          </View>
        </DemoBlock>
      </View>
    )
  }
}