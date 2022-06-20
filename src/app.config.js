export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/icon/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: 'FunPlus UI',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index', // 页面路径，必须在 pages 中先定义
        text: '组件', // tab 上按钮文字
        iconPath: 'assets/app-icons/home.png', // 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，不支持网络图片。 当 position 为 top 时，不显示 icon。
        selectedIconPath: 'assets/app-icons/home-active.png', // 选中时的图片路径
      },
      {
        pagePath: 'pages/icon/index',
        text: '图标', // tab 上按钮文字
        iconPath: 'assets/app-icons/icon.png',
        selectedIconPath: 'assets/app-icons/icon-active.png',
      }
    ],
    color: '#999999', //	tab 上的文字默认颜色，仅支持十六进制颜色
    selectedColor: '#1B80DD', // tab 上的文字选中时的颜色，仅支持十六进制颜色
    backgroundColor: '#ffffff', // tab 的背景色，仅支持十六进制颜色
    borderStyle: 'white', //tabbar 上边框的颜色， 仅支持 black / white
    position: 'bottom', //tabBar的位置，仅支持 bottom / top
    custom: false, //自定义 tabBar
  }
})
