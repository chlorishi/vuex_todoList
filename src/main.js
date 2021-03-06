import Vue from 'vue'
import App from './App.vue'

// 1. 导入 ant-design-vue 组件库
import Antd from 'ant-design-vue'
// 2. 导入组件库的样式表
import 'ant-design-vue/dist/antd.css'
//导入store
import store from './store/index'
Vue.config.productionTip = false
    // 3. 安装组件库
Vue.use(Antd)

new Vue({
    store,
    render: h => h(App)
        // eslint-disable-next-line eol-last
}).$mount('#app')