import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import createStore from '../src/store/index'

const setupApp = async () => {
  Vue.config.productionTip = false
  Vue.use(Vuex)
  const store = await createStore()

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
setupApp()
