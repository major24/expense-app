<template>
  <div class="main-content">
    <div v-if="!loggedIn">
      <b>Please login before accessing the form!</b>
    </div>
    <div v-if="loggedIn && expenseDetails.expense.isShowExpenses" id="expense-content">
      <UserInfo />
      <ExpenseGridView />
      <AddExpenseModalPage />
      <ApproverInfo />

      <div id="action-buttons-footer" class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-right">
            <span class="action-buttons">
              <button id="add-expense" type="button" class="btn btn-secondary">Cancel</button>
            </span>
            <span class="action-buttons">
              <button id="add-expense" type="button" class="btn btn-success" @click="save">Submit</button>
            </span>
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
  margin-right: 8em;
  margin-left: 8em;
}
#row-header {
  background-color: #34b1eb;
}
#grid > .row > div {
  border-bottom: 0.5px solid grey;
}
#action-buttons-footer {
  margin-top: 3em;
}
.action-buttons {
  margin: 0.4em;
}
.field-label {
  font-weight: bold;
  font-size: 1em;
  margin: 0.5em;
}
.field-value {
  color: blue;
  font-weight: bold;
  font-size: 1em;
  margin: 0.2em;
}
</style>
