import { View } from '@tarojs/components'
import DEFAULT_AVATAR from './images/default-user.svg'
class MEMBER {
  constructor(obj) {
    this.name = obj.name || '成员名字' // 名称
    this.nickName = obj.nickName || '成员昵称' // 昵称
    this.job = obj.job || '成员角色' // 角色
    this.major = obj.major || null // 第二行介绍：主要工作
    this.avatar = obj.avatar || DEFAULT_AVATAR // 头像
    this.canShowDetail = obj.hasOwnProperty('canShowDetail') ? obj.canShowDetail : true
    this.pic = obj.pic || null // 照片
    this.intro = obj.intro || (<View>这个人很懒，什么都没有留下</View>) // 简介
  }
}

const THT = new MEMBER({
  name: '田昊天',
  nickName: '田昊天',
  job: '主程/UI 设计/交互',
  major:'FunPlus 设计者',
  avatar: 'http://cdn.illiaccess.com/images/funplus-ui/kimi.avatar.JPG',
  pic: 'http://cdn.illiaccess.com/images/funplus-ui/kimi.pic.JPG',
  intro: (<View>
    <View>一个说不清前端还是后端的全栈工程师</View>
    <View>Github: https://github.com/mitkimi</View>
  </View>)
})

const XIN = new MEMBER({
  name: '万 鑫',
  nickName: '鑫 仔',
  job: '交互设计与研发',
  avatar: 'http://cdn.illiaccess.com/images/funplus-ui/xinzai.avatar.JPG',
  pic: 'http://cdn.illiaccess.com/images/funplus-ui/xin.pic.jpeg',
  intro: (<View>
    <View>设计师出身</View>
    <View>前端开发“动手“专家</View>
  </View>)
})

const ABCD = new MEMBER({
  name: '孙永豪',
  nickName: '甲乙丙丁',
  job: '主程/交互',
  avatar: 'http://cdn.illiaccess.com/images/funplus-ui/abcd.avatar.JPG',
  pic: 'http://cdn.illiaccess.com/images/funplus-ui/abcd.pic.jpeg',
  intro: (<View>
    <View>这个人很懒，一行代码都没写</View>
  </View>)
})

const MINI_OCEAN = new MEMBER({
  name: '戴海洋',
  nickName: '我叫小海洋啊',
  job: '交互研发',
  avatar: 'http://cdn.illiaccess.com/images/funplus-ui/miniocean.avatar.JPG',
  pic: 'http://cdn.illiaccess.com/images/funplus-ui/miniocean.pic.jpeg',
  intro: (<View>
    <View>“等会儿，我在 debug”</View>
  </View>)
})

const THOMAS = new MEMBER({
  name: '申旭凌',
  nickName: 'I\'m Thomas',
  job: '统筹/项目经理',
  avatar: 'http://cdn.illiaccess.com/images/funplus-ui/thomas.avatar.JPG',
  pic: 'http://cdn.illiaccess.com/images/funplus-ui/thomas.pic.jpeg',
  intro: (<View>
    <View>原字节跳动内容安全领域专家、内容运营</View>
    <View>一个很皮的蜘蛛侠 coser</View>
  </View>)
})

const YUNLOO = new MEMBER({
  name: 'YUNLOO',
  nickName: 'yunloo',
  job: '策划/营销',
  avatar: 'http://cdn.illiaccess.com/images/funplus-ui/yunloo.avatar.JPG',
  pic: 'http://cdn.illiaccess.com/images/funplus-ui/yunloo.pic.JPG',
  intro: (<View>
    <View>我只是个可爱的小营销啊！</View>
  </View>)
})

const TOVI = new MEMBER({
  name: '刘 童',
  nickName: '刘童',
  job: '视觉',
  avatar: 'http://cdn.illiaccess.com/images/funplus-ui/tong.avatar.JPG',
  pic: 'http://cdn.illiaccess.com/images/funplus-ui/tovi.pic.jpeg',
  intro: (<View>
    <View>要有光·品牌服务事务所「所长」 </View>
    <View>MUSE 国际设计大奖获得者</View>
    <View>“创意人应该永远像个孩子”</View>
    <View>Lighting for you</View>
  </View>)
})

const RITIAN = new MEMBER({
  name: 'ARI',
  nickName: '日天君',
  job: '用户体验/文案',
  avatar: 'http://cdn.illiaccess.com/images/funplus-ui/ritianjun.avatar.JPG',
  pic: 'http://cdn.illiaccess.com/images/funplus-ui/ritianjun.jpeg',
  intro: (<View>
    <View>语文老师</View>
    <View>讲好软件里的每一段故事</View>
  </View>)
})

const PAUL = new MEMBER({
  name: '尚亚鹏',
  nickName: 'Paul',
  job: 'AI/数据支持',
  avatar: 'http://cdn.illiaccess.com/images/funplus-ui/paul.avatar.JPG',
  pic: 'http://cdn.illiaccess.com/images/funplus-ui/paul.pic.jpeg',
  intro: (<View>
    <View>“为什么用户喜欢点这里？搞点数据分析一下”</View>
  </View>)
})

const HI = new MEMBER({
  name: '陈文智',
  nickName: 'Hi！',
  job: '用户体验',
  canShowDetail: false,
  avatar: 'http://cdn.illiaccess.com/images/funplus-ui/hi.avatar.JPG'
})


export const MAIN_DEVELOPER = [THT]
export const DEVELOPER = [XIN, ABCD, MINI_OCEAN]
export const MEMBERS = [THOMAS, YUNLOO, TOVI, RITIAN, PAUL, HI]