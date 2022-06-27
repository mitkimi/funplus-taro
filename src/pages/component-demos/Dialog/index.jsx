import { Image, View } from '@tarojs/components'
import React from 'react'
import ComponentIcon from '../../../assets/component-icons/Dialog.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Button from '../../../packages/Button'
import Dialog from '../../../packages/Dialog'
import DangerousIcon from '../../../packages/Toast/images/danger-icon.png'

export default class DialogDemoPage extends React.Component {
  state = {
    normalShow: false,
    iconShow: false,
    closeOnlyShow: false
  }
  render() {
    return (
      <View>
        <DemoPageTitle title="Dialog" icon={ComponentIcon}>对话框</DemoPageTitle>
        <DemoBlock name="普通对话框" tips="一个最常见的对话框">
          <View style={{ marginTop: 10 }}>
            <Button fluid onClick={() => {
              this.setState({
                normalShow: true
              })
            }}>展示普通对话框</Button>
            <Dialog header={{
              title: '普通对话框'
            }} footer={{
              cancelBtn: '取消',
              onCancel: () => {
                this.setState({
                  normalShow: false
                })
              },
              submitBtn: '确定',
              onSubmit: () => {
                this.setState({
                  normalShow: false
                })
              }
            }} open={this.state.normalShow}>对话框内容</Dialog>
          </View>
        </DemoBlock>
        <DemoBlock name="带图标的对话框" tips="带图标的对话框">
          <View style={{ marginTop: 10 }}>
            <Button fluid onClick={() => {
              this.setState({
                iconShow: true
              })
            }}>展示带图标的对话框</Button>
            <Dialog header={{
              icon: <Image src={DangerousIcon} />,
              title: '带图标的对话框'
            }} footer={{
              cancelBtn: '取消',
              onCancel: () => {
                this.setState({
                  iconShow: false
                })
              },
              submitBtn: '确定',
              onSubmit: () => {
                this.setState({
                  iconShow: false
                })
              }
            }} open={this.state.iconShow}>你确定要xxx吗？</Dialog>
          </View>
        </DemoBlock>
        <DemoBlock name="带有关闭按钮的对话框" tips="一般情况下不保留操作权限">
          <View style={{ marginTop: 10 }}>
            <Button fluid onClick={() => {
              this.setState({
                closeOnlyShow: true
              })
            }}>展示带有关闭按钮的对话框</Button>
            <Dialog closeable onClose={() => { 
              this.setState({
                closeOnlyShow: false
              })
            }} open={this.state.closeOnlyShow}>
              <View>这里是大段的对话框内容</View>
              <View>这里是大段的对话框内容</View>
              <View>这里是大段的对话框内容</View>
              <View>这里是大段的对话框内容</View>
              <View>这里是大段的对话框内容</View>
              <View>这里是大段的对话框内容</View>
              <View>这里是大段的对话框内容</View>
              <View>这里是大段的对话框内容</View>
            </Dialog>
          </View>
        </DemoBlock>
      </View>
    )
  }
}