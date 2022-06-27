import { Image, View } from '@tarojs/components'
import React from 'react'
import ImageIcon from '../../../assets/app-icons/home-active.png'
import ComponentIcon from '../../../assets/component-icons/Cell.png'
import DemoBlock from '../../../components/DemoBlock'
import DemoPageTitle from '../../../components/DemoPageTitle'
import Cell from '../../../packages/Cell'

export default class CellDemoPage extends React.Component {
  render() {
    return (
      <View>
        <DemoPageTitle title="Cell" icon={ComponentIcon}>单元格</DemoPageTitle>
        <DemoBlock name="用于展示" tips="不做链接使用">
          <View style={{ marginTop: 10, marginLeft: -10, marginRight: -10 }}>
            <Cell options={[
              {
                title: '用户等级',
                message: 'V1'
              },
              {
                title: '用户密码安全',
                message: '安全级别：高'
              }
            ]} />
          </View>
        </DemoBlock>
        <DemoBlock name="用于链接" tips="有交互，有高亮效果">
          <View style={{ marginTop: 10, marginLeft: -10, marginRight: -10 }}>
            <Cell options={[
              {
                title: '查看详情',
                isLink: true,
                linkType: 'navigateTo',
                to: ''
              },
              {
                title: '绑定手机号',
                message: '135 **** 1234',
                isLink: true,
                linkType: 'navigateTo',
                to: ''
              }
            ]} />
          </View>
        </DemoBlock>
         <DemoBlock name="带有图标" tips="可使用图片、Icon 组件">
          <View style={{ marginTop: 10, marginLeft: -10, marginRight: -10 }}>
            <Cell options={[
              {
                icon: <Image src={ImageIcon} />,
                title: '使用图片',
                isLink: true,
                linkType: 'navigateTo',
                to: ''
              },
              {
                title: '使用图标组件',
                isLink: true,
                linkType: 'navigateTo',
                to: ''
              }
            ]} />
          </View>
        </DemoBlock>
      </View>
    )
  }
}