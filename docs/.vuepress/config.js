module.exports = {
  title: '前端知识总结', // 网站左上角的标题
  description: '从各个方面总结前端知识', // <meta name="description" content="Just playing around">
  base: '/vuepress-frontend-web/',
  // 主题配置
  themeConfig: {
    nav: [
      {text: 'JS基础', link: '/JS基础/01-执行上下文、作用域链，闭包'},
      {text: 'CSS基础', link: '/CSS基础/'},
    ]
  },
  //   // 侧边栏

  plugins: [
    ['vuepress-plugin-auto-sidebar',
      {
        collapsable: false, // 标题是否可折叠
        sidebarDepth: 3, // 标题深度
        titleMode: 'lowerCase', // 标题样式 可选值lowerCase、upperCase、firstUpperCase、firstLowerCase
        handleSidebar(sidebar){
          console.log("侧边栏: ", sidebar);
          // ... 编辑操作
          return sidebar
        }
      }
    ]
  ]
}