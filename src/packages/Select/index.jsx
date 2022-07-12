import { View } from '@tarojs/components'
import { useState } from 'react'
import Button from '../Button'
import Drawer from '../Drawer'
import './Select.less'

const Select = ({
  options,
  title
}) => {
  const [drawerShow, setDrawerShow] = useState(true)
  return <View>
    <Drawer open={drawerShow} placement="bottom" actions={
      <View className="actions">
        <View><Button type="link">取消</Button></View>
        <View><Button type="link">确定</Button></View>
        <View className="title">{ title }</View>
      </View>
    } onClose={console.log(1)} height={350}>

    </Drawer>
  </View>
}

export default Select