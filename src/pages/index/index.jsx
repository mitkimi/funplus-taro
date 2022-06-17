import { Image, View } from '@tarojs/components'
import React from 'react'
import Dialog from '../../components/Dialog'

export default class Index extends React.Component {
  state = {
    open: false
  }

  handleCloseDialog = () => {
    this.setState({
      open: false
    })
  }

  componentDidMount = () => {
    setTimeout(() => {
        this.setState({
        open: true
      })
    }, 1000)
  }

  render() {
    const header = {
      icon: <Image src="../../components/Toast/images/success-icon.png" />,
      title: '短信验证码'
    }
    const footer = {
      cancelBtn: '取消',
      submitBtn: '同意',
      onCancel: (...args) => {
        console.log('cancel', ...args)
      },
      onSubmit: (...args) => {
        console.log('submit', ...args)
      }
    }
    return (
      <View>
        <Dialog open={this.state.open} header={header} footer={footer} onClose={this.handleCloseDialog}
        closeable>
          <View>中间的部分</View>
        </Dialog>
      </View>
    )
  }
}