import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImNvbnRpbi5tYXJjZWxvQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1ODk5MjE3NTIsImV4cCI6MTU5MDE4MDk1Mn0.12fYMeJsHWBgE-C2RB5Vfp3JH_2J_rEHmKwUJyXG_-E'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')