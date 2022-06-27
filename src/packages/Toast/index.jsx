import { Image, View } from '@tarojs/components'
import { useEffect, useState } from 'react'
import DangerIcon from './images/danger-icon.png'
import FailIcon from './images/fail-icon.png'
import InfoIcon from './images/info-icon.png'
import LoadingIcon from './images/loading-icon.svg'
import SuccessIcon from './images/success-icon.png'
import './Toast.less'

const ICON_IMAGE = {
  info: InfoIcon,
  success: SuccessIcon,
  danger: DangerIcon,
  fail: FailIcon,
  loading: LoadingIcon
}

const Toast = (props) => {
  const [title, setTitle] = useState(props.title || (props.type === 'loading' ? '加载中' : ''))
  const [type, setType] = useState(props.type || 'info')
  const [duration, setDuration] = useState(props.type === 'loading' ? 0 : typeof props.duration === 'number' ? props.duration : 3)
  

  useEffect(() => {
    props.open && duration && setTimeout(() => {
      props.onClose()
    }, duration * 1000)
  }, [props.open])
  
  return (
    props.open && <View className={`toast animate_fadeIn`}>
      <View className="toast-container">
        <View className="icon-container">
          <Image className="icon-image" src={ ICON_IMAGE[type] } />
        </View>
        <View className="text-container">{title}</View>
      </View>
    </View>
  )
}

export default Toast