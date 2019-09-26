<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <hr />
  <div>
    <button @click="getGithubUsers()">Get api data from public site</button>
    <span>This call is made directly from browser. No Cors is reqd. This is public api from github users</span>
  </div>
  <div>
    <button @click="getDataFromLocalApi()">Get api data from another domain</button>
    <span>This api is running in separate domain. (https://localhost:5001). JS brower calls the MVC server and server calls the api and returns the data...</span>
  </div>
    <div>
    <button @click="postData()">Post Jsondata </button>
    <span>Post data to another domain using axios</span>
  </div>
  <hr />
  <p>Result:</p>
  <p>{{info}}</p>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      info: '...'
    }
  },
  methods: {
    getGithubUsers () {
      // console.log('getting messages from public api')
      axios
        .get('https://api.github.com/users')
        .then(response => (this.info = response))
    },
    getDataFromLocalApi () {
      // console.log('getting data from local api')
      const url = '/api/transactions'

      axios.get(url)
        .then(response => {
          // console.log('data retrieved successfully')
          // console.log('>>>raw resp: ', response) // raw response
          this.info = response.data
        })
        .catch(err => {
          // console.log(err)
          this.info = err
        })
        .finally(function () {
          // console.log('done')
        })
    },
    postData () {
      // console.log('posting data to local api')
      const url = '/api/transactions'
      const data = {
        'id': 999,
        'userId': 'user1',
        'description': 'McDonalds Restaurant',
        'transType': 'DR',
        'amount': 40.99
      }

      axios({
        method: 'post',
        url: url,
        data: data
      })
        .then(response => {
          // console.log('data posted successfully')
          // console.log('>>>raw resp: ', response) // raw response
          this.info = response.data
        })
        .catch(err => {
          // console.log(err)
          this.info = err
        })
        .finally(function () {
          // console.log('done')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
