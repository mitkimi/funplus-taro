import { Image, View } from '@tarojs/components'
import Button from '../Button'
import './Dialog.less'
import CloseIcon from './images/close-icon.png'

const Dialog = ({
  open,
  header,
  footer,
  closeable,
  children,
  onClose
}) => {
  const handleCancel = (...args) => {
    footer.onCancel(...args)
    onClose()
  }

  const handleSubmit = (...args) => {
    footer.onSubmit(...args)
  }
  return (
    open && <View className="dialog">
      <View className="cover animate_fadeIn"></View>
      <View className="dialog-container">
        <View className="dialog-main">
          {
            header && (
              <View className="dialog-header">
                {header.hasOwnProperty('icon') && (<View className="header-icon">{header.icon}</View>)}
                { header.title }
              </View>
            )
          }
          <View className="dialog-body">
            {children}
          </View>
          {footer && (
            <View className="dialog-footer">
              {footer.cancelBtn && <Button type="secondary" size="small" onClick={handleCancel}>{ footer.cancelBtn }</Button>}
              {footer.submitBtn && <Button type="primary" size="small" onClick={handleSubmit}>{ footer.submitBtn }</Button>}
            </View>
          )}
        </View>
        {closeable && <View className="close-btn" onClick={onClose}>
          <Image src={CloseIcon} />
        </View>}
      </View>
    </View>
  )
}

export default Dialog