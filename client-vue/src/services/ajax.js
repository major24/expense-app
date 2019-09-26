const axios = require('axios').default

export default {
  get: async function (url) {
    try {
      const resp = await axios.get(url)
      return resp
    } catch(err) {
      return err;
    }
  },
  post: async function (url, data) {
    try {
      const resp = await axios.post(url, data);
      return resp;
    } catch (err) {
      return err;
    }
  }
}














/*
const ajax = {
  get2: async function get22() {

  },
  get: function(options) {
    console.log('in ajax get service', url);
    const url = 'https://api.github.com/users';

    // const resp = await axios.get(url);
    // console.log('>>>>>', resp);

    // axios.get(url)
    // .then(response => {
    //   // console.log('data retrieved successfully');
    //   // console.log('>>>raw resp: ', response); // raw response
    //   return response.data;
    // })
    // .catch(err => {
    //   console.log(err);
    //   return err;
    // })
    // .finally( function() {
    //   console.log('done');
    // });
  },
  post: function (url, options) {
    console.log('in ajax post');

    return 'data from post ajax';
  }
}

module.exports = ajax;

// Mixin for dependcy inj

// import Vue from 'vue'
// Vue.mixin( {
//   beforeCreate() {
//     const options = this.$options;
//     if ( options.ajax )
//       this.$ajax = options.ajax;
//     else if ( options.parent && options.parent.$ajax )
//       this.$ajax = options.parent.$ajax;
//   }
// } );

// export default function ajax(url, data = {}) {
//   return fetch( url, {
//     method: 'POST',
//     body: JSON.stringify( data ),
//     headers: { 'Content-Type': 'application/json' }
//   } ).then( response => response.json() );
// }
*/
