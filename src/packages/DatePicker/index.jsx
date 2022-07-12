import React from 'react'
import { View } from '@tarojs/components'
import dayjs from 'dayjs'
import Picker from '../Picker'
import Button from '../Button'
import './DatePicker.less'

class SerendipityDatePicker extends React.Component {
  constructor (props) {
    super (props)
  }

  state = {
    visible: true,
    selectedDate: null,
    pickerClass: 'containerFadeIn'
  }

  componentDidMount () {
    const today = new Date(dayjs(new Date()).format('YYYY/MM/DD'))
    this.setState({
      selectedDate: today
    })
  }

  handleInitial (value) {
    console.log('initial value: ', value)
  }

  handleConfirm = () => {
    this.props.onConfirm(this.state.selectedDate)
    this.closePicker()
  }

  handleChange = (buffer) => {
    // const today = new Date(dayjs(new Date().format('YYYY/MM/DD')))
    // if (buffer < today) {
    //   buffer = today
    // }
    this.setState({
      selectedDate: buffer
    })
  }

  handleCancel = () => {
    this.closePicker()
  }

  closePicker = () => {
    this.setState({
      pickerClass: 'containerFadeOut'
    })
    setTimeout(() => {
      this.setState({
        pickerClass: '',
        visible: false
      })
      this.props.onClose()
    }, 700)
  }

  render () {
    /*支持参数：
      mode: ['year', 'month', 'day', 'hour', 'minute', 'second']
      unit: 界面中的日期标记，例如年，月，日，时，分，秒
      start: 用于mode为year和day，可以指定过去的某一年/天，也可以指定将来的某一年/天
      duration: 显示当前模式的最大数量，例如10年或30天
      fields: 可指定当前模式中间隔固定时间间断进行显示，例如只显示10秒、20秒、30秒
      format: 用于解决组合时间的格式化问题，例如X月X日，或者8:00
      selected: 可指定当前模式下只选择有效范围内的哪几个元素，例如24小时内，只选择8点、12点、16点
      humanity：目前只支持mode为day，可显示类似微信提醒的时间选择列表，如今天，明天 XX月XX日， XX月XX日 周X, 需搭配format: 'M月D日'使用
    */
    const dateTime = [
      { mode: 'year', unit: '年', duration: 2 },
      { mode: 'month', unit: '月' },
      { mode: 'day', duration: 30, unit: '日' }
    ]
    return this.state.visible ? (
      <View className={['picker-container', this.state.pickerClass]}>
        <View className="picker-pad">
          <View className="picker-actions">
            <Button size="mini" className="btn" onClick={this.handleCancel}>取 消</Button>
            <Button type="primary" size="mini" className="btn" onClick={this.handleConfirm}>确 定</Button>
          </View>
          <Picker
            dateTime={dateTime}
            onInitial={this.handleInitial}
            mode="format"
            onChange={this.handleChange}
          />
        </View>
      </View>
    ) : (<></>)
  }
}

export default SerendipityDatePicker
