import { Image, View } from '@tarojs/components'
import React from 'react'
import Cell from '../../components/Cell'
import SuccessIcon from '../../components/Toast/images/success-icon.png'

export default class Index extends React.Component {

  render() {
    const options = [
      {
        title: '用户名',
        message: 'mitkimi'
      },
      {
        title: '手机号',
        isLink: true,
        linkType: 'navigateTo',
        to: '/pages/index/index',
        message: '156 **** 5231'
      },
      {
        title: '邮箱',
        isLink: true,
        linkType: 'navigateTo',
        to: '/pages/index/index',
        message: '去绑定'
      },
      {
        title: '隐私政策',
        isLink: true,
        linkType: 'navigateTo',
        to: '/pages/index/index'
      }
    ]

    const options2 = [
          {
            icon: <Image src={SuccessIcon} />,
            title: '客服',
            isLink: true,
            linkType: 'navigateTo',
            message: '400-800-1234',
            to: '/pages/index/index'
          }
        ]
    return (
      <View>
        <Cell options={options} />
        <Cell options={options2} />
      </View>
    )
  }
}