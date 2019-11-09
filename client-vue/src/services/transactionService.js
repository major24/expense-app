const config = require('../../src/config/rest.config.json')
const ajax = require('./ajax').default

export default {
  getAll: async () => {
    const url = config.api.getTransactions.url
    const resp = await ajax.get(url)
    return resp
  },
  getTransactionsByUserId: async (userId) => {
    let url = config.api.getUserTransactions.url
    console.log('>>>tr')
    url = url.replace('{userId}', userId)
    console.log('>>>trurl', url)
    const resp = await ajax.get(url)
    console.log('>>>', resp.data)
    console.log('>>>>>', resp)
    return resp
  },

  save: async (transactions, user) => {
    // Create an expense obj to be passed to api service..
    const expns = transactions.map((t) => {
      let obj = {
        'id': t.id,
        'description': t.description,
        'amount': parseFloat(t.amount),
        'tax': parseFloat(t.tax),
        'category': t.category,
        'transdate': t.transDate
      }
      return obj
    })
    let dataToSubmit = {
      'userId': user.userId,
      'costCentre': user.costCentre,
      'approverId': user.approverId,
      'status': 'Submitted',
      'expenseItems': expns
    }
    console.log('>>>>>Exp to be submitted: ', dataToSubmit)
    try {
      const url = config.api.postExpenses.url
      const data = dataToSubmit
      const resp = await ajax.post(url, data)
      if (resp.status === 200 || resp.status === 201) {
        return resp
      } else {
        console.log('>>>Error: Expense submission:', resp.response.data)
      }
    } catch (error) {
      console.log('>>>Error: Expense submission: ', error.message)
      return error
    }
  },

  getByUserId: async (options) => {
    let url = `${config.api.getGithubusers.url}/${options.userId}`
    const resp = await ajax.get(url)
    return resp
  }
}
