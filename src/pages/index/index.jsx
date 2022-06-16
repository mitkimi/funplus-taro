import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import Toast from '../../components/Toast'
import './index.less'

const IndexPage = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <View className="bal" onClick={() => { setOpen(true) }}>
        点这里
        <Toast open={open} title="支付成功" type="success" onClose={() => setOpen(false)} />
      </View>
    </View>
  )
}

export default IndexPage