<template>
  <div class="main-content">
    <!-- <p>{{expenseDetails}}</p> -->
    <div v-if="expenseDetails.expense.isShowExpenses" id="expense-content">
      <hr />
        <div>
          <span class="field-label">User Id:</span>
          <span class="field-value">{{expenseDetails.user.userId}}</span>
        </div>
      <hr />
      <ExpenseGridView />
      <AddExpenseModalPage />

      <div id="action-buttons-footer" class="container-fluid">
        <div class="row">
          <div class="col-md-4 text-left">
            <span>Approvar Id</span>
            <input type="text" id="approverId" @change="onchangeApproverId" :value="expenseDetails.user.approverId" />
          </div>
          <div class="col-md-4 text-left">
            Cost Centre
            <input type="text" id="costCentre" @change="onchangeCostCentre" :value="expenseDetails.user.costCentre" />
          </div>
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
      <div>
        Message: {{expenseDetails.expense.submissionMessage}}
      </div>
    </div>
  </div>
</template>

<script>
import ExpenseGridView from './ExpenseGridView'
import AddExpenseModalPage from '@/components/AddExpenseModalPage'
import { mapState } from 'vuex'
import router from '../router'

export default {
  name: 'expense',
  components: {
    ExpenseGridView,
    AddExpenseModalPage
  },
  created: function() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log('>>> From Session ', user);
    if (user) {
      this.loadData(user.userId);
      this.setUserData(user);
    }
  },
  computed: {
    ...mapState({
      userDetails: state => state.commonDetails.user,
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
    save() {
      this.$store.dispatch('expenseDetails/save');
    },
    onchangeCostCentre(e) {
      this.$store.commit('expenseDetails/setCostCentre', e.target.value)
    },
    onchangeApproverId(e) {
      this.$store.commit('expenseDetails/setApproverId', e.target.value)
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
  border-bottom: .5px solid grey;
}
#action-buttons-footer {
  margin-top: 3em;
}
.action-buttons {
  margin: .4em;
}
.field-label {
  font-weight: bold;
  font-size: 1em;
  margin: .5em;
}
.field-value {
  color: blue;
  font-weight: bold;
  font-size: 1em;
  margin: .2em;
}
</style>
