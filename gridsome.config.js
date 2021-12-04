// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '拉勾教育',
  siteDescription: '大前端',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL:  process.env.GRIDSOME_API_URL, // 接口地址
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag', 'general'], // 对应的数据类型，接口名称
        // singleTypes: ['general'],

        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }

  ],
    templates: {
      StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  }

}

// 在gridsome.config.js中配置
// export default {

// }
