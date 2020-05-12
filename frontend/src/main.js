import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImNvbnRpbi5tYXJjZWxvQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODkzMDYxNzEsImV4cCI6MTU4OTU2NTM3MX0.gsNSkN01rUty_zsOJxx-zbvcpwmu9T4X7sxEMVMdR2U'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')