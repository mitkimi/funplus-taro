import { View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Toast.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Button from '../../../packages/Button'
import Toast from '../../../packages/Toast'

export default class ButtonDemoPage extends React.Component {
  state = {
    successShow: false,
    dangerShow: false,
    failShow: false,
    infoShow: false,
    loadingShow: false
  }
  render() {
    return (
      <View>
        <DemoPageTitle title="Toast" icon={ComponentIcon}>吐司</DemoPageTitle>
        <DemoBlock name="按钮类型" tips="展示多种 Toast 类型">
          <View style={{ marginTop: 10 }}>
            <Button fluid onClick={() => {
              this.setState({
                successShow: true
              })
            }}>Show Success Toast</Button>
            <Toast open={this.state.successShow} title="成功" type="success" duration={1.5} onClose={() => {
              this.setState({
                successShow: false
              })
            }}></Toast>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button fluid onClick={() => {
              this.setState({
                dangerShow: true
              })
            }}>Show Danger Toast</Button>
            <Toast open={this.state.dangerShow} title="危险" type="danger" duration={1.5} onClose={() => {
              this.setState({
                dangerShow: false
              })
            }}></Toast>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button fluid onClick={() => {
              this.setState({
                failShow: true
              })
            }}>Show Fail Toast</Button>
            <Toast open={this.state.failShow} title="失败" type="fail" duration={1.5} onClose={() => {
              this.setState({
                failShow: false
              })
            }}></Toast>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button fluid onClick={() => {
              this.setState({
                loadingShow: true
              })
              setTimeout(() => {
                this.setState({
                  loadingShow: false
                })
              }, 3000)
            }}>Show Loading Toast</Button>
            <Toast open={this.state.loadingShow} title="加载中" type="loading"></Toast>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button fluid onClick={() => {
              this.setState({
                infoShow: true
              })
            }}>Show Info Toast</Button>
            <Toast open={this.state.infoShow} title="消息" type="info" duration={1.5} onClose={() => {
              this.setState({
                infoShow: false
              })
            }}></Toast>
          </View>
        </DemoBlock>
      </View>
    )
  }
}