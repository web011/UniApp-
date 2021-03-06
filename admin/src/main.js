import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 引入el ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;


// 引入http写好的地址
import http from './http'
Vue.prototype.$http = http;


// 引入字体图标
import './assets/iconfont/iconfont.css'

// 引入scss文件
import './assets/scss/style.scss'

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.mixin({
  computed:{
    uploadUrl(){
      return this.$http.defaults.baseURL + 'upload'
    }
  },
  methods:{
    getAuthHeaders(){
      return {
        Authorization:`Bearer ${localStorage.token || ''}`
      }
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
