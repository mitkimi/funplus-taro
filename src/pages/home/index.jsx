import { Image, View } from '@tarojs/components'
import React from 'react'
import Logo from '../../assets/images/logo-transparent.png'
import ItemGroup from '../../components/ItemGroup'
import './home.less'

export default class HomePage extends React.Component {
  
  render() {
    const components = [
      {
        groupName: '基础组件 Basic',
        items: [
          {
            name: '布局'
          },
          {
            name: '栅格'
          },
          {
            name: '按钮'
          },
          {
            name: '唯一按钮'
          }
        ]
      },
      {
        groupName: '导航 Navigator',
        items: [
          {
            name: '面包屑'
          },
          {
            name: '步骤条'
          },
          {
            name: '回到顶部'
          }
        ]
      },
      {
        groupName: '表单 Form',
        items: [
          {
            name: '表单'
          },
          {
            name: '输入框'
          },
          {
            name: '文本区域'
          },
          {
            name: '数字输入器'
          },
          {
            name: '验证码输入器'
          },
          {
            name: '单选按钮'
          },
          {
            name: '多选按钮'
          },
          {
            name: '选择器'
          },
          {
            name: '级联选择器'
          },
          {
            name: '开关'
          }
        ]
      },
      {
        groupName: '反馈 Feedback',
        items: [
          {
            name: '信息'
          },
          {
            name: '吐司'
          },
          {
            name: '对话框'
          },
          {
            name: '抽屉'
          }
        ]
      }
    ]
    return (
      <View className="home-page-container">
        <View className="logo-area">
          <Image className="logo-image" src={Logo} />
          <View className="app-name">FunPlus UI</View>
          <View className="app-sub-title">(For Taro)</View>
        </View>
        {
          components.map((group, index) => {
            return <ItemGroup title={group.groupName} key={`group_index_${index}`} items={group.items}></ItemGroup>
          })
        }
        <View className="copyright">&copy; funplus taro</View>
      </View>
    )
  }
}