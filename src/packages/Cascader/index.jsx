import { PickerView, PickerViewColumn, View } from '@tarojs/components'
import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import Drawer from '../Drawer'
import './Cascader.less'

const Cascader = ({
  open,
  options,
  onSubmit,
  onChange,
  onClose,
  title
}) => {
  const [drawerShow, setDrawerShow] = useState(open || false)
  const [selectedIndex, setSelectedIndex] = useState([])
  const [realOptions, setRealOptions] = useState([])

  
  const SelectDrawer = useRef()
  // 每次滚动后的结果
  const handlePickerChange = (e) => {
    const nextIndex = e.detail.value
    if (Object.prototype.toString.call(options[0]) === '[object Object]') {
      const mapIndex = []
      let flag = 3
      for (let i = 0; i < nextIndex.length; i += 1) {
        if (selectedIndex[i] !== nextIndex[i]) flag = i

        if (i > flag) { mapIndex[i] = 0 } else { mapIndex[i] = nextIndex[i] }
      }
      setRealOptions(changeChildToRealOptions(options, mapIndex))
    }
    onChange && onChange(nextIndex)
    setSelectedIndex(nextIndex)
  }
  // 点击确定时候的结果
  const handleSubmit = () => {
    const initIndexes = []
    for (let i = 0; i < realOptions.length; i += 1) { initIndexes.push(0) }
    const realNextIndex = selectedIndex.length > 0 ? selectedIndex : initIndexes
    const submitValue = []
    realOptions.map((e, i) => {
      submitValue.push(e[realNextIndex[i]].value)
    })
    onSubmit(submitValue)
    SelectDrawer.close()
    handleClose(submitValue)
  }
  // 点击取消时候的结果
  const handleCancel = () => {
    handleClose()
  }
  
  const handleClose = (submitValue) => {
    SelectDrawer.close()
    setTimeout(() => {
      setDrawerShow(false)
      onClose(submitValue)
    }, 300)
  }

  useEffect(() => {
    if (open) {
      setDrawerShow(true)
      init()
    }
  }, [open])

  const init = () => {
    const firstItem = options[0]
    Object.prototype.toString.call(firstItem) === '[object Array]' && setRealOptions(options)
    Object.prototype.toString.call(firstItem) === '[object Object]' && setRealOptions(changeChildToRealOptions(options))
  }

  const changeChildToRealOptions = (options, selectIndexes) => {
    function foo (arr, target) {
      const ret = []
      let realTarget = target || []
      if (!target) {
        getLevel(arr)
        function getLevel (arr) {
          for(const e of arr) {
            if (e.hasOwnProperty('children')) {
              realTarget.push(0)
              getLevel(e.children)
              break
            }
          }
        }
        realTarget.push(0)
      }
      for (let i = 0; i < realTarget.length; i += 1) {
        // i 是层级，不代表选中了谁
        const currentArr = []
        let nextArr = []
        if (i === 0) nextArr = arr
        if (i === 1) nextArr = arr[realTarget[0]].children
        if (i === 2) nextArr = arr[realTarget[0]].children[realTarget[1]].children
        nextArr.map(e => {
          const obj = { label: e.label, value: e.value }
          currentArr.push(obj)
        })
        ret[i] = currentArr
      }
      return ret
    }
    return foo(options, selectIndexes)
  }
  const onCoverClose = () => {
    setDrawerShow(false)
    onClose && onClose()
  }
  return <View>
    <Drawer ref={SelectDrawer} open={drawerShow} placement="bottom" actions={
      <View className="actions">
        <View><Button type="link" onClick={handleCancel}>取消</Button></View>
        <View><Button type="link" onClick={handleSubmit}>确定</Button></View>
        <View className="title">{ title }</View>
      </View>
    } height={350} closeable  onClose={onCoverClose}>
      <PickerView indicatorStyle="height: 50px;" style="width: 100%; height: 300px;" onChange={handlePickerChange}>
        {realOptions && realOptions.map(e => {
          return <PickerViewColumn>
            {
              e.map(j => {
                return <View className="picker-item">{ j.label }</View>
              })
            }
          </PickerViewColumn>
        })}
        
      </PickerView>
    </Drawer>
  </View>
}

export default Cascader