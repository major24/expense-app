<template>
  <div class="main-content">
    <div v-if="!expenseDetails.user.userId">
      <b>Please login before accessing the form!</b>
    </div>
    <div v-if="expenseDetails.user.userId && expenseDetails.expense.isShowExpenses" id="expense-content">
      <UserInfo />
      <ExpenseGridView />
      <AddExpenseModalPage />
      <p></p>
      <ApproverInfo />

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-right">
            <button id="add-expense" type="button" class="btn btn-secondary">Cancel</button>
            <button id="add-expense" type="button" class="btn btn-success ml-1" @click="save">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!expenseDetails.expense.isShowExpenses">
      <div>Message: {{expenseDetails.expense.submissionMessage}}</div>
    </div>
  </div>
</template>

<script>
import ExpenseGridView from './ExpenseGridView'
import AddExpenseModalPage from '@/components/AddExpenseModalPage'
import UserInfo from '@/components/UserInfo'
import ApproverInfo from '@/components/ApproverInfo'
import { mapState } from 'vuex'
import loginService from '../services/loginService'

export default {
  name: 'expense',
  components: {
    ExpenseGridView,
    AddExpenseModalPage,
    UserInfo,
    ApproverInfo
  },
  data: function () {
    return {
    }
  },
  created: async function () {
    let userId = sessionStorage.getItem('userId')
    console.log('>>>From Session: logged in user:', userId)
    // user =  { userId: "user1" }; // TMP to work when api is not available
    if (userId) {
      // Upon refresh, reload user info
      if (this.expenseDetails.user.userId === '') {
        const user = await loginService.getUser(userId)
        this.$store.commit('expenseDetails/setUser', user)
        this.$store.commit('expenseDetails/setApproverId', user.managerId)
      }
      this.loadData(userId)
      this.loadCostCentreApprovalData()
    }
  },
  computed: {
    ...mapState({
      expenseDetails: state => state.expenseDetails,
      transactions: state => state.expenseDetails.transactions,
      errorDetails: state => state.expenseDetails.errors
    })
  },
  methods: {
    loadData (userId) {
      this.$store.dispatch('expenseDetails/loadData', userId)
    },
    loadCostCentreApprovalData () {
      this.$store.dispatch('expenseDetails/loadCostCentreApprovalData')
    },
    showExpenses () {
      this.$store.commit('/expenseDetails/setShowExpenses')
    },
    save () {
      let foundError = false
      if (!this.expenseDetails.user.userId) {
        alert('User Id missing. Please refresh and login again')
      }
      if (!this.expenseDetails.user.approverId) {
        const payload = {
          errorId: 'approverId',
          errorDesc: 'Approver id is required'
        }
        this.$store.commit('expeneDetails/setError', payload)
        foundError = true
      }
      if (!this.expenseDetails.user.costCentre) {
        const payload = {
          errorId: 'costCentre',
          errorDesc: 'Cost centre is required'
        }
        this.$store.commit('expenseDetails/setError', payload)
        foundError = true
      }
      if (foundError) return false
      this.$store.dispatch('expenseDetails/save')
    }
  }
}
</script>

<style scoped>
.main-content {
  margin-right: 3em;
  margin-left: 3em;
}
</style>
