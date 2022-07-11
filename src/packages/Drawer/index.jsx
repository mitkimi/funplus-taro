import { View } from '@tarojs/components'
import { useState } from 'react'
import './Drawer.less'

const DrawerComponent = ({
    theme,
    placement,
    blur,
    width,
    height,
    children,
    onClose,
    closeable,
    actions,
    open
}) => {
  const [close, setClose] = useState('open')
  const realTheme = theme || 'normal'
  const realPlacement = placement || 'right'
  const realWidth = (realPlacement === 'left' || realPlacement === 'right') ? width || 275 : '100%'
  const realHeight = realPlacement === 'bottom' ? height || 500 : '100%'
  const handleDrawerClose = () => {
    closeable && (() => {
      setClose('close')
      setTimeout(function () {
        onClose()
        setClose('open')
      }, 300)
    })()
  }
  
  return (
    open && <View className={'drawer-container'}>
      <View className={`drawer-cover drawer-${realTheme} drawer-cover-${blur ? 'blur' : 'clear'} drawer-cover-${close}`} onClick={handleDrawerClose}></View>
      <View className={`drawer-body drawer-${realPlacement} drawer-body-${realPlacement}-${close}`} style={{ width: realWidth, height: realHeight }}>
        {actions && <View className="actions">{actions}</View>}
        <View className="real-body">{ children }</View>
      </View>
    </View>
  )
}

export default DrawerComponent