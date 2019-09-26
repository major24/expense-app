import Vue from 'vue'
import Vuex from 'vuex'
import expenseDetails from './expenseModule/expenseDetails'
import commonDetails from './commonModule/commonDetails'
Vue.use(Vuex)

async function createStore (ajax) {
  return new Vuex.Store({
    modules: {
      expenseDetails: expenseDetails,
      commonDetails: commonDetails
    }
  })
}

export default createStore
