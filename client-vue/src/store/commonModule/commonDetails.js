
export default {
  namespaced: true,
  state: {
    user: {
      isAuthenticated: false
    }
  },
  mutations: {
    setAuthenticationSuccess (state) {
      state.user.isAuthenticated = true
    },
    setAuthenticationFail (state) {
      state.user.isAuthenticated = false
    },
    logout (state) {
      state.user.isAuthenticated = false
    }
  }
}
