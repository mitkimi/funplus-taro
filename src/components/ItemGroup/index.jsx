import { View } from '@tarojs/components'
import './ItemGroup.less'

const ItemGroup = (props) => {
  const {
    title,
    items
  } = props
  const EmptyArray = new Array((4 - items.length % 4)).fill('')
  return (
    <View className="item-group">
      <View className="item-group-title">{title}{ EmptyArray }</View>
      <View className="item-group-items">
        {
          items.map(e => {
            return <View className="item">
            <View className="icon">
              icon
            </View>
            <View className="text">名称</View>
          </View>
          })
        }
        {
          EmptyArray.map(() => {
          return <View className="empty-item"></View>
        })}
      </View>
    </View>
  )
}

export default ItemGroup