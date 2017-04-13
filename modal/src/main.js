import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 开启debug
Vue.config.debug = true 

Vue.use(VueRouter)
Vue.use(VueResource)

// 定义组件
import invite from './component/invite.vue'

// 创建路由器实例，配置路由规则
const routes = [
  {path:'/',component: invite}
]

const router = new VueRouter({
  mode: 'hash',
  base: '/unite',
  routes:routes 
})

const app = new Vue({
  router:router,
  render :h =>h(App)
}).$mount('#app')