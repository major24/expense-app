const axios = require('axios').default

export default {
  get: async function (url) {
    try {
      const resp = await axios.get(url)
      return resp
    } catch (err) {
      return err
    }
  },
  post: async function (url, data) {
    try {
      const resp = await axios.post(url, data)
      return resp
    } catch (err) {
      return err
    }
  }
}
