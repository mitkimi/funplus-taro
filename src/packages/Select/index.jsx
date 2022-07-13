import { PickerView, PickerViewColumn, View } from '@tarojs/components'
import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import Drawer from '../Drawer'
import './Select.less'

const Select = ({
  open,
  options,
  onSubmit,
  onClose,
  title
}) => {
  const [drawerShow, setDrawerShow] = useState(open || false)
  const [selectedIndex, setSelectedIndex] = useState()
  const SelectDrawer = useRef()
  // 每次滚动后的结果
  const handlePickerChange = (e) => {
    const nextIndex = e.detail.value[0]
    setSelectedIndex(nextIndex)
  }
  // 点击确定时候的结果
  const handleSubmit = () => {
    const realNextIndex = selectedIndex || 0
    onSubmit(options[realNextIndex].value)
    SelectDrawer.close()
    handleClose()
  }
  // 点击取消时候的结果
  const handleCancel = () => {
    handleClose()
  }
  
  const handleClose = () => {
    SelectDrawer.close()
    setTimeout(() => {
      setDrawerShow(false)
      onClose && onClose()
    }, 300)
  }

  const onCoverClose = () => {
    setDrawerShow(false)
    onClose && onClose()
  }
  useEffect(() => {
    setDrawerShow(open)
  }, [open])

  return <View>
    <Drawer ref={SelectDrawer} open={drawerShow} placement="bottom" actions={
      <View className="actions">
        <View><Button type="link" onClick={handleCancel}>取消</Button></View>
        <View><Button type="link" onClick={handleSubmit}>确定</Button></View>
        <View className="title">{ title }</View>
      </View>
    } height={350} closeable onClose={onCoverClose}>
      <PickerView indicatorStyle="height: 50px;" style="width: 100%; height: 300px;" onChange={handlePickerChange}>
        <PickerViewColumn>
          {options && options.map(e => {
            return <View className="picker-item">{ e.label }</View>
          })}
        </PickerViewColumn>
      </PickerView>
    </Drawer>
  </View>
}

export default Select