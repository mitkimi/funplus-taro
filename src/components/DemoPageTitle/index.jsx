import { Image, View } from '@tarojs/components'
import './DemoPageTitle.less'

const DemoPageTitle = (props) => {
  const {
    title, children, icon
  } = props
  return (
    <View className="demo-page-title">
      <View className="main-title">{ children }</View>
      <View className="sub-title">{title}</View>
      {icon && <Image className="demo-page-icon" src={icon} />}
    </View>
  )
}

export default DemoPageTitle