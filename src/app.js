import { showShareMenu } from '@tarojs/taro'
import { Component } from 'react'
import './app.less'

class App extends Component {

  componentDidMount() {
    showShareMenu({})
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
