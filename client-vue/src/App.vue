<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/expense" class="btn btn-link">Expense Form</router-link>
      <button v-if="!userDetails.user.isAuthenticated" type="button" @click="login" class="btn btn-link">Login</button>
      <button v-if="userDetails.user.isAuthenticated" type="button" @click="logout" class="btn btn-link">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import router from './router'

export default {
  name: 'App',
  mounted: function () {
    let user = sessionStorage.getItem('user')
    if (user) {
      this.$store.commit('commonDetails/setAuthenticationSuccess')
    } else {
      this.$store.commit('commonDetails/setAuthenticationFail')
    }
  },
  computed: {
    ...mapState({
      userDetails: state => state.commonDetails,
      expenseDetails: state => state.expenseDetails
    })
  },
  methods: {
    login () {
      router.push({ name: 'login' })
    },
    logout () {
      sessionStorage.clear()
      this.$store.commit('commonDetails/logout')
      this.$store.commit('expenseDetails/resetTransactions')
      router.push({ name: 'home' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: .5em;
  margin-left: 3em;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.show-loginout-link {
  visibility: block;
}
.hide-loginout-link {
  visibility: hidden;
}
</style>
