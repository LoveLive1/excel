// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css' //新添加2，避免后期打包样式不同，要放在import App from './App';之前

import axios from '@/api/http'             //vue项目对axios的全局配置      
import VueAxios from 'vue-axios' 



//引用echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.use(VueAxios,axios)
Vue.use(ElementUI)      
Vue.config.productionTip = false

   //新添加3
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
