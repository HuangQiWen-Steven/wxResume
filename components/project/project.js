// components/project/project.js
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
    project:[
      {
        name:"博客系统（pc端）",
        desc:`该博客系统是一个p2p类型的系统，前端使用Bootstrap框架编写，后端功能分为文章管理子系统，用户管理子系统，用户信息设置子系统，文章标签子系统，访问数量子系统
        核心架构采用node中间层架构，整合上述若干子系统。该项目自己编写，技术包括了vue 、node（ejs模板引擎、cook-session、express、multer）、数据平台使用的是MySQL集群`
      },
      {
        name:"仿网易云app微信小程序",
        desc:'仿照网易云app制作的微信小程序，完成主页面推荐音乐，热歌榜单，搜索框以及点击播放歌曲。'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
