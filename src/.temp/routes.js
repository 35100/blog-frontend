const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/wgf/blog-frontend/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/wgf/blog-frontend/src/templates/Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--samplepost-vue" */ "/Users/wgf/blog-frontend/src/pages/samplepost.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/wgf/blog-frontend/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/wgf/blog-frontend/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome-0-7-23-gridsome--app--pages--404-vue" */ "/Users/wgf/blog-frontend/node_modules/_gridsome@0.7.23@gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/wgf/blog-frontend/src/pages/Index.vue")

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
