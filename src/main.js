// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 将创建的共享数据对象，挂载到vue实例中
  // 所有的组件可以直接从store中获取全局的数据了
  store,
  components: { App },
  template: '<App/>'
})
