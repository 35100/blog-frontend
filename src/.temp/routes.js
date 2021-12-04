const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/wgf/gridsome/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/wgf/gridsome/src/templates/Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--samplepost-vue" */ "/Users/wgf/gridsome/src/pages/samplepost.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/wgf/gridsome/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/wgf/gridsome/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/wgf/gridsome/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/wgf/gridsome/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/post/:id/",
    component: c2
  },
  {
    path: "/samplepost/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
