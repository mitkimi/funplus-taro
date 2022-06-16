import { View } from '@tarojs/components'
import React from 'react'
import CaptchaInput from '../../components/CaptchaInput'
import './index.less'

export default class Index extends React.Component {
  render() {
    return (
      <View>
        <CaptchaInput format="***-***" />
      </View>
    )
  }
}