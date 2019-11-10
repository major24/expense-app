<template>
  <div class="main-content">
    <div v-if="!loggedIn">
      <b>Please login before accessing the form!</b>
    </div>
    <div v-if="loggedIn && expenseDetails.expense.isShowExpenses" id="expense-content">
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
      loggedIn: false
    }
  },
  created: function () {
    let userId = sessionStorage.getItem('userId')
    console.log('>>>From Session: logged in user:', userId)
    // user =  { userId: "user1" }; // TMP to work when api is not available
    if (userId && this.userDetails.userData) {
      this.loadData(userId)
      this.setUserData(this.userDetails.userData)
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }
  },
  computed: {
    ...mapState({
      userDetails: state => state.commonDetails,
      expenseDetails: state => state.expenseDetails,
      transactions: state => state.expenseDetails.transactions
    })
  },
  methods: {
    loadData (userId) {
      this.$store.dispatch('expenseDetails/loadData', userId)
    },
    setUserData (user) {
      this.$store.dispatch('expenseDetails/setUserData', user)
    },
    save () {
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
