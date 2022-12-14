import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import home from '../views/home.vue'
import imglist from '../views/imglist.vue'
import imgmanage from '../views/imgmanage.vue'
import imgupload from '../views/imgupload.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
    meta: { menushow: true }
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    redirect: "/home/imglist",
    meta: { isRouterAuth: true },
    children: [{
      path: "imglist",
      component: imglist,
      meta: { isRouterAuth: true },
    }, {
      path: "imgmanage",
      component: imgmanage,
      meta: { isRouterAuth: true },
    }, {
      path: "imgupload",
      component: imgupload,
      meta: { isRouterAuth: true },
    }],
  },
]






const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isRouterAuth) {    // 判断当前路由是否需要路由验证
    if (localStorage.getItem('token')) {  // 判断当前的token是否存在
      next()  // 存在继续执行
    } else {
      next('/')  //不存在需要跳到登陆页
    }
  } else {   // 不需要验证路由，继续执行
    next()
  }
})
export default router
