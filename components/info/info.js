// components/info/info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    name:'小黄鸭',
    tel:"1122377679632",
    sex:'男',
    age:"22",
    email:"xiaohuangya74@163.com",
    blog:"https://www.xiaohuangya.xyz",
    skill: [
      {name:'JavaScript',percent:85,color:"bg-green"},
      {name:'微信小程序',percent:85,color:"bg-yellow"},
      {name:'node',percent:65,color:"bg-orange"},
      {name:'php',percent:20,color:"bg-blue"},
      {name:'HTML/CSS', percent:85,color:"bg-purple"},
    ],
    education:[
      {school:'北京大学',major:'计算机科学与技术',year:'2017-2021',desc:'本专业培养掌握计算机基础，熟悉软件开发技术'}
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
