import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImNvbnRpbi5tYXJjZWxvQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1OTAxODY5NTMsImV4cCI6MTU5MDQ0NjE1M30.LiTkd9mw8MmgTQRQwWPoiPz-T3KAqyoIUrfTW2R_oGw'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')