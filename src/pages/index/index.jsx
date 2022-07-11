import { View } from '@tarojs/components'
import React from 'react'
import './index.less'

export default class Index extends React.Component {
  state = {
    touches: []
  }

  handleClick = (ec) => {
    const nextArr = ec.touches
    console.log(nextArr)
    this.setState({
      touches: [
        ...this.state.touches,
        ...nextArr
      ]
    })
  }

  componentDidMount() {
    setInterval(() => {
      console.log(this.state.touches.length)
      this.setState({touches: []})
    }, 5000)
  }

  render() {
    return (
      <View>
        <View>Stamp Testing Page</View>
        <View className="stamp-place" onTouchStart={this.handleClick}>
          Place stamp here
        </View>
      </View>
    )
  }
}