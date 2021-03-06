const config = require('../../src/config/rest.config.json')
const ajax = require('./ajax').default

export default {
  authenticateUser: async function (userId, password) {
    try {
      const url = config.api.postAuthenticateUser.url
      const data = { 'UserId': userId, 'Password': password }
      const resp = await ajax.post(url, data)
      if (resp.status === 200) {
        return true
      }
      return false
    } catch (error) {
      console.log(error.message)
      return false
    }
  },
  getUser: async function (userId) {
    let url = config.api.getUserById.url
    url = url.replace('{userId}', userId)
    const resp = await ajax.get(url)
    return resp.data
  },
  setUserInSessionStorage (user) {
    this.saveToSessionStorage(user)
  },
  saveToSessionStorage (userId) {
    if (typeof (Storage) !== 'undefined') {
      sessionStorage.setItem('userId', userId)
    } else {
      console.log('>>>Error: your browser does not support Web Storage...')
    }
  }
}
