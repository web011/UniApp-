import Vue from 'vue'
import App from './App'

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)



Vue.config.productionTip = false
import 'static/scss/style.scss'


import http from './http'
Vue.prototype.$http = http;



// 引入字体图标
import './static/iconfont/iconfont.css'
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
