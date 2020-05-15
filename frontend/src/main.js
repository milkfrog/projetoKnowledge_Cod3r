import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImNvbnRpbi5tYXJjZWxvQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODk1NDU4NDUsImV4cCI6MTU4OTgwNTA0NX0.T5QlCVLlFwwuDYfEmMvz6X8CIFEotCvLZyQ1LCO84ws'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')