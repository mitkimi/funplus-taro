import { Image, View } from '@tarojs/components'
import React from 'react'
import Logo from '../../assets/images/logo-transparent.png'
import DemoBlock from '../../components/DemoBlock'
import Dialog from '../../packages/Dialog'
import './about.less'
import Bubble from './images/bubble.svg'
import { DEVELOPER, MAIN_DEVELOPER, MEMBERS } from './member'

export default class AboutPage extends React.Component {
  state = {
    detailShow: false,
    detailInfo: {
      name: '',
      job: '',
      major: '',
      avatar: '',
      nickName: '',
      pic: '',
      intro: ''
    }
  }


  handleShowDetail = (obj) => {
    if (!obj.canShowDetail) return
    this.setState({
      detailInfo: {
        name: obj.name,
        nickName: obj.nickName,
        job: obj.job,
        major: obj.major,
        avatar: obj.avatar,
        pic: obj.pic,
        intro: obj.intro
      }
    })
    setTimeout(() => {
      this.setState({ detailShow: true })
    }, 0)
  }
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
        <DemoBlock name="开发信息">
          <View className="tab-box-list">
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28 }}>Taro.js</View>
              <View className="tab-box-label">开发框架</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 24 }}>React.js</View>
              <View className="tab-box-label">基础框架</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 20 }}>JavaScript</View>
              <View className="tab-box-label">语 言</View>
            </View>
          </View>
        </DemoBlock>
        <DemoBlock name="各端支持情况">
          <View className="tab-box-list">
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#1BBA48' }}>支持</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>飞书小程序</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#1BBA48' }}>支持</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>字节跳动小程序</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#999999' }}>未测试</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>钉钉小程序</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#1BBA48' }}>支持</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>支付宝小程序</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#999999' }}>未测试</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>支付宝 IOT 小程序</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#999999' }}>未测试</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>京东小程序</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#1BBA48' }}>支持</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>React Native</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#999999' }}>未测试</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>百度小程序</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#1BBA48' }}>支持</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>微信小程序</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#1BBA48' }}>支持</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>企业微信小程序</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#999999' }}>未测试</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>QQ 小程序</View>
            </View>
            <View className="tab-box-item">
              <View className="tab-box-value" style={{ fontSize: 28, color: '#999999' }}>未测试</View>
              <View className="tab-box-label" style={{ color: '#999999' }}>H5</View>
            </View>
          </View>
        </DemoBlock>
        <DemoBlock name="感谢">
          <View className="paragrams">我们的图标库大量的使用了字节跳动的开源图标库 IconPark，并且在此基础上部分图标进行了修改或者重绘。</View>
          <View className="paragrams">在此，十分感谢字节跳动 IconPark 项目。</View>
        </DemoBlock>
        <DemoBlock name="开发者">
          <View className="developer-list">
            {
              MAIN_DEVELOPER.map(developer => {
                return (
                  <View className="developer-item" onClick={() => { this.handleShowDetail(developer)}}>
                    <View className="avatar">
                      <Image className="real-avatar" src={developer.avatar} />
                      {developer.canShowDetail && <Image class="bubble" src={ Bubble } style={{ width: 16, height: 16 }} />}
                    </View>
                    <View className="name">{developer.nickName}</View>
                    <View className="job">
                      <View>{developer.job}</View>
                      <View>{ developer.major }</View>
                    </View>
                  </View>
                )
              })
            }
          </View>
          <View className="developer-list">
            {
              DEVELOPER.map(developer => {
                return (
                  <View className="developer-item" onClick={() => { this.handleShowDetail(developer)}}>
                    <View className="avatar">
                      <Image className="real-avatar" src={developer.avatar} />
                      {developer.canShowDetail && <Image class="bubble" src={ Bubble } style={{ width: 16, height: 16 }} />}
                    </View>
                    <View className="name">{developer.nickName}</View>
                    <View className="job">
                      <View>{developer.job}</View>
                      <View>{ developer.major }</View>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </DemoBlock>
        <DemoBlock name="团队成员">
          <View className="developer-list">
            {
              MEMBERS.map(developer => {
                return (
                  <View className="developer-item" onClick={() => { this.handleShowDetail(developer)}}>
                    <View className="avatar">
                      <Image className="real-avatar" src={developer.avatar} />
                      {Boolean(developer.canShowDetail) && <Image class="bubble" src={ Bubble } style={{ width: 16, height: 16 }} />}
                    </View>
                    <View className="name">{developer.nickName}</View>
                    <View className="job">
                      <View>{developer.job}</View>
                      <View>{ developer.major }</View>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </DemoBlock>
        <Dialog open={this.state.detailShow} closeable onClose={() => {
          this.setState({ detailShow: false, detailInfo: {} })
        }}>
          <View className="dialog-header-container">成员介绍</View>
          {this.state.detailInfo.pic && <Image className="dialog-pic" src={this.state.detailInfo.pic} mode="aspectFill" />}
          <View className="dialog-name">
            {this.state.detailInfo.name}
          </View>
          <View className="related-info">
            <View className="jobs">
              {this.state.detailInfo.job} {this.state.detailInfo.major}
            </View>
            <View className="wechat">
              <Image className="real-avatar" src={this.state.detailInfo.avatar} />
              <View className="real-wechat-name">{ this.state.detailInfo.nickName }</View>
            </View>
          </View>
          <View className="dialog-intro">
            {this.state.detailInfo.intro}
          </View>
        </Dialog>
      </View>
    )
  }
}