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
            icon: require(`../../assets/component-icons/Layout.png`),
            componentName: 'Layout',
            name: '布局'
          },
          {
            icon: require(`../../assets/component-icons/Container.png`),
            componentName: 'Container',
            name: '栅格'
          },
          {
            icon: require(`../../assets/component-icons/Cell.png`),
            componentName: 'Cell',
            name: '单元格'
          },
          {
            icon: require(`../../assets/component-icons/Button.png`),
            componentName: 'Button',
            name: '按钮'
          },
          {
            icon: require(`../../assets/component-icons/BigCircleButton.png`),
            componentName: 'BigCircleButton',
            name: '唯一按钮'
          }
        ]
      },
      {
        groupName: '导航 Navigator',
        items: [
          {
            icon: require(`../../assets/component-icons/BreadCrumb.png`),
            name: '面包屑'
          },
          {
            icon: require(`../../assets/component-icons/Stepper.png`),
            name: '步骤条'
          },
          {
            icon: require(`../../assets/component-icons/ToTop.png`),
            name: '回到顶部'
          }
        ]
      },
      {
        groupName: '表单 Form',
        items: [
          {
            icon: require(`../../assets/component-icons/Form.png`),
            name: '表单'
          },
          {
            icon: require(`../../assets/component-icons/Input.png`),
            componentName: 'Input',
            name: '输入框'
          },
          {
            icon: require(`../../assets/component-icons/TextArea.png`),
            componentName: 'TextArea',
            name: '文本区域'
          },
          {
            icon: require(`../../assets/component-icons/NumberInput.png`),
            name: '数字输入器'
          },
          {
            icon: require(`../../assets/component-icons/CaptchaInput.png`),
            componentName: 'CaptchaInput',
            name: '验证码输入器'
          },
          {
            icon: require(`../../assets/component-icons/Radio.png`),
            componentName: 'Radio',
            name: '单选按钮'
          },
          {
            icon: require(`../../assets/component-icons/CheckBox.png`),
            componentName: 'CheckBox',
            name: '多选按钮'
          },
          {
            icon: require(`../../assets/component-icons/Selector.png`),
            componentName: 'Select',
            name: '选择器'
          },
          {
            icon: require(`../../assets/component-icons/Cascader.png`),
            name: '级联选择器'
          },
          {
            icon: require(`../../assets/component-icons/Switch.png`),
            componentName: 'Switch',
            name: '开关'
          }
        ]
      },
      {
        groupName: '反馈 Feedback',
        items: [
          {
            icon: require(`../../assets/component-icons/Message.png`),
            componentName: 'Message',
            name: '信息'
          },
          {
            icon: require(`../../assets/component-icons/Toast.png`),
            componentName: 'Toast',
            name: '吐司'
          },
          {
            icon: require(`../../assets/component-icons/Dialog.png`),
            componentName: 'Dialog',
            name: '对话框'
          },
          {
            icon: require(`../../assets/component-icons/Drawer.png`),
            componentName: 'Drawer',
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