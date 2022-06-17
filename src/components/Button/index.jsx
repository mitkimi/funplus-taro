import { Image, View } from '@tarojs/components'
import './Button.less'
import LoadingIconGray from './images/loading-icon-gray.svg'
import LoadingIcon from './images/loading-icon.svg'

const Button = ({
  size,
  type,
  danger,
  fluid,
  loading,
  disabled,
  onClick,
  children
}) => {
  const nextType = type || 'default'
  const nextSize = size || 'standard'
  return (
    <View className={[
      'button',
      `button-type-${nextType}`,
      `button-size-${nextSize}`,
      danger ? 'button-danger' : '',
      fluid ? 'button-fluid' : '',
      disabled ? 'button-disabled' : '',
      loading ? 'button-loading' : ''
    ]}
      disabled={loading || disabled}
      onClick={onClick}>
      { loading && ((type === 'primary' || type === 'dark' || type === 'secondary' || type === 'text') ? <Image className="loading-icon" src={ LoadingIconGray } /> : <Image className="loading-icon" src={ LoadingIcon } />)} {children}
    </View>
  )
}

export default Button