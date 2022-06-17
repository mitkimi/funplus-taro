import { Image, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './Cell.less'
import LinkIcon from './images/link-icon.png'

const Cell = (props) => {
  const options = props.options
  const handleLinkClick = (element) => {
    Taro[element.linkType]({
      url: element.to
    })
  }
  return (
    <View className="cell">
      {
        options.map(e => {
          return (
            <View className={[
              'cell-item',
              e.isLink ? 'cell-item-link' : ''
            ]}
              onClick={() => {
                e.isLink && handleLinkClick(e)
              }}>
              <View className="cell-item-container">
                <View className="info-area">
                  {e.icon && <View className="cell-item-icon">{ e.icon }</View>}
                  {e.title}
                </View>
                <View className="message-area">
                  { e.message }
                  {e.isLink && <Image className="link-icon" src={LinkIcon} />}
                </View>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default Cell