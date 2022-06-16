# TOAST USAGE


> import component

```javascript
import React from 'react'
import Toast from '@/components/Toast'

export default class Index extends React.Component {
  state = {
    open: false
  }

  handleToastOpen = () => {
    this.setState({
      open: true
    })
  }
  handleToastClose = () => {
    this.setState({
      open: false
    })
  }

  render () {
    const { open } = this.state
    return (
      <>
        <Button onClick={() => { this.handleToastOpen()}}>打开 Toast</Button>
        <Toast open={open} title="支付成功" type="success" onClose={() => {
          this.handleToastClose()
        }}>
      </>
    )
  }
}
```

## Attributes
| 属性 | 数据类型 | 含义 | 默认值 | 可选值 | 备注 |
| title | String | 提示文字 | | | |
| type | String | Toast 类型 | info | success/info/danger/fail/ loading | |
| duration | Number | 显示时间 | 3 | | 0 为不关闭，单位：秒 |