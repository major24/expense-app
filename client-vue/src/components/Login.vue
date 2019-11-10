<template>
  <div class="wrapper">
    <form class="form-signin">
      <h2 class="form-signin-heading">Login</h2>
      <input
        type="text"
        id="userId"
        :value="userId"
        @change="onchangeuserId"
        class="form-control"
        name="userId"
        placeholder="User Name"
        required
        autofocus
      />
      <input
        type="password"
        id="password"
        :value="password"
        @change="onchangePassword"
        class="form-control"
        name="password"
        placeholder="Password"
        required
      />
      <button class="btn btn-lg btn-primary btn-block" @click="login" type="button">Login</button>
      <div>
        <span id="error" class="error">{{authenticationError}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import loginService from '../services/loginService'
import router from '../router'
import { mapState } from 'vuex'

export default {
  name: 'Login',
  data: function () {
    return {
      userId: '',
      password: '',
      authenticationError: ''
    }
  },
  computed: {
    ...mapState({
      commonDetails: state => state.commonDetails,
      userDetails: state => state.expenseDetails
    })
  },
  methods: {
    onchangeuserId (e) {
      this.userId = e.target.value
    },
    onchangePassword (e) {
      this.password = e.target.value
    },
    async login () {
      this.authenticationError = ''
      const isAuthenticated = await loginService.authenticateUser(
        this.userId,
        this.password
      )
      // eslint-disable-next-line
      console.log('>>>isAuthenticated: ', isAuthenticated)
      if (isAuthenticated) {
        const user = await loginService.getUser(this.userId)
        // Save to session storage
        loginService.setUserInSessionStorage(user.userId)
        this.$store.commit('commonDetails/setAuthenticationSuccess')
        this.$store.commit('expenseDetails/setUser', user)
        this.$store.commit('expenseDetails/setApproverId', user.managerId)
        router.push({ name: 'expense' })
      } else {
        this.authenticationError = 'Authentication failed!'
      }
    }
  }
}
</script>

<style scoped>
body {
  background: #eee !important;
}

.wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-control {
  font-size: 16px;
  height: auto;
  padding: 10px;
  margin-top: 0.5em;
}

input[type="text"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

input[type="password"] {
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.error {
  color: red;
  font-size: 18px;
}
</style>
