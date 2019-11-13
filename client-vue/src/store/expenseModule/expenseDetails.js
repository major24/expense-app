import Transaction from '../../models/transaction'
import transactionService from '../../services/transactionService'
import moment from 'moment'

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
    },
    errors: {
      userId: '',
      approverId: '',
      costCentre: ''
    },
    costCentreApprovals: [],
    approvals: []
  },
  actions: {
    async loadData ({ commit, state }, userId) {
      if (state.transactions.length === 0) {
        const data = await transactionService.getTransactionsByUserId(userId)
        if (data && data.status === 200) {
          console.log('Transactions sussessfully fetched: ', data)
          commit('setTransactionData', data.data)
        } else {
          console.log('Error in fetching transaction data:')
        }
      }
    },
    async save ({ commit, state }) {
      const resp = await transactionService.save(state.transactions, state.user)
      if (resp.status === 201 || resp.status === 200) {
        commit('setHideExpenses')
        commit('setSubmissionMessage', resp.data)
      } else {
        commit('setSubmissionMessage', resp.data)
      }
    },
    async loadCostCentreApprovalData ({ commit, state }) {
      if (state.costCentreApprovals.length === 0) {
        const data = await transactionService.getCostCentreApprovals()
        if (data && data.status === 200) {
          console.log('Costcetra approvals data sussessfully fetched: ', data)
          commit('setCostCentreApprovals', data.data)
          let list = []
          data.data.map((x) => {
            x.approvals.map(y => list.push(y))
          })
          commit('setCostCentreApprovers', list)
        } else {
          console.log('Error in fetching cost centre approvals data:')
        }
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
        tran.transDate = moment(tranItem.transDate).format('YYYY-MM-DD')
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
      console.log('>>>>>>>>>>>>>>>????', payload)
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
      // this.state.user = { ...state.user, approverId: approverId }
    },
    setHideExpenses (state) {
      state.expense.isShowExpenses = false
    },
    setShowExpenses (state) {
      state.expense.isShowExpenses = true
    },
    setSubmissionMessage (state, msg) {
      state.expense.submissionMessage = msg
    },
    setError (state, payload) {
      state.errors[payload.errorId] = payload.errorDesc
    },
    resetError (state, fieldId) {
      state.errors[fieldId] = ''
    },
    setUser (state, user) {
      state.user = user
    },
    setCostCentreApprovals (state, ccApprovals) {
      state.costCentreApprovals = ccApprovals
    },
    setCostCentreApprovers (state, approvers) {
      state.approvals = approvers
    }
  }
}
