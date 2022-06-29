import { View } from '@tarojs/components'
import './DemoBlock.less'

const DemoBlock = (props) => {
  const {
    name, children, description, tips
  } = props
  return (
    <View className="demo-block">
      <View className="demo-block-name">{name}</View>
      {tips && <View className="demo-block-tips">{tips}</View>}
      <View className="demo-block-container">
        {children}
      </View>
      {description && <View className="demo-block-description">{description}</View>}
    </View>
  )
}

export default DemoBlock