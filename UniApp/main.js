import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import 'static/scss/style.scss'



// 引入字体图标
import './static/iconfont/iconfont.css'
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
