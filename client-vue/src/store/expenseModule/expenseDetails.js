import Transaction from '../../models/transaction'
import transactionService from '../../services/transactionService'
// import transactionService from '../../services/mocks/mockTransactionService'

export default {
  namespaced: true,
  state: {
    transactions: [],
    user: {
      userId: '',
      approverId: '',
      costCentre: ''
    },
    expense: {
      isShowExpenses: true,
      submissionMessage: ''
    }
  },
  actions: {
    async loadData ({ commit, state }, userId) {
      if (state.transactions.length === 0) {
        const data = await transactionService.getTransactionsByUserId(userId)
        // console.log('Data sussessfully fetched111: ', data.response)
        // console.log('Data sussessfully fetched222: ', data.response.data)
        console.log('Data sussessfully fetched333: ', data)
        if (data && data.status === 200) {
          console.log('Data sussessfully fetched: ', data)
          commit('setTransactionData', data.data)
        } else {
          console.log('Error in fetching transaction data:')
          // commit('setHideExpenses')
          // commit('setSubmissionMessage', 'Error in fetching transaction data')
        }
      }
    },
    setUserData ({ commit, state }, user) {
      commit('setUserid', user.userId)
      commit('setCostCentre', user.costCentre)
      commit('setApproverId', user.managerId)
    },
    async save ({ commit, state }) {
      console.log('>>>saving', state.transactions)
      const resp = await transactionService.save(state.transactions, state.user)
      console.log('>>>>>>', resp)
      if (resp.status === 201 || resp.status === 200) {
        commit('setHideExpenses')
        commit('setSubmissionMessage', resp.data)
      } else {
        commit('setSubmissionMessage', resp.data)
      }
    }
  },
  mutations: {
    setTransactionData (state, payload) {
      payload.forEach(tranItem => {
        let tran = new Transaction()
        tran.id = tranItem.id
        tran.description = tranItem.description
        tran.amount = tranItem.amount
        tran.tax = tranItem.tax
        tran.transDate = tranItem.transDate
        tran.category = tranItem.category
        tran.isPersonal = false
        tran.isRemove = false
        tran.isOutOfPocket = false
        state.transactions.push(tran)
      })
    },
    addTransaction (state, payload) {
      const id = 0 // Send zero to expense api service..
      let tran = new Transaction()
      tran.id = id
      tran.description = payload.description
      tran.amount = payload.amount
      tran.tax = payload.tax
      tran.transDate = payload.transDate
      tran.category = payload.category
      tran.isPersonal = false
      tran.isRemove = false
      tran.isOutOfPocket = true
      state.transactions.push(tran)
    },
    setIsPersonal (state, payload) {
      state.transactions.forEach(tran => {
        if (tran.id === payload.id) {
          tran.isPersonal = payload.status
        }
      })
    },
    setIsRemove (state, payload) {
      state.transactions.forEach((tran, idx) => {
        if (tran.id === payload.id) {
          state.transactions.splice(idx, 1)
        }
      })
    },
    resetTransactions (state) {
      state.transactions = []
    },
    setUserid (state, userId) {
      state.user.userId = userId
    },
    setCostCentre (state, costCentre) {
      state.user.costCentre = costCentre
    },
    setApproverId (state, approverId) {
      state.user.approverId = approverId
    },
    setHideExpenses (state) {
      state.expense.isShowExpenses = false
    },
    setSubmissionMessage (state, msg) {
      state.expense.submissionMessage = msg
    }
  }
}
