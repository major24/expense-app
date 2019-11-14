<template>
  <div class="content">
    <div id="grid">
      <div class="row">
        <div class="col-sm-12 text-right p-1">
          <button id="add-expense" type="button" data-toggle="modal" data-target="#addExpenseModal" class="btn btn-primary btn-sm">Add Expense</button>
        </div>
      </div>
      <div id="row-header" class="row grid-row">
        <div class="col-sm-2 bg-primary text-white">Date</div>
        <div class="col-sm-4 bg-primary text-white">Description</div>
        <div class="col-sm-2 bg-primary text-white">Amount</div>
        <div class="col-sm-2 bg-primary text-white">Category</div>
        <div class="col-sm-1 bg-primary text-white">Personal</div>
        <div class="col-sm-1 bg-primary text-white">Remove</div>
      </div>
      <div class="row grid-row" v-for="tran in transactions" :key="tran.id">
        <div class="col-sm-2 border-bottom">{{tran.transDate}}</div>
        <div class="col-sm-4 border-bottom">{{tran.description}}</div>
        <div class="col-sm-2 border-bottom text-right">{{tran.amount}}</div>
        <div class="col-sm-2 border-bottom">{{tran.category}}</div>
        <div class="col-sm-1 border-bottom">
          <input v-if="!tran.isOutOfPocket" type="checkbox" @click="onchangeIsPersonal($event, tran.id)" :id="'personal-'+tran.id" />
        </div>
        <div class="col-sm-1">
          <button id="remove" type="button" class="btn btn-danger btn-sm" @click="remove($event, tran.id)">x</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'expense',
  computed: {
    ...mapState({
      transactions: state => state.expenseDetails.transactions
    })
  },
  methods: {
    onchangeIsPersonal (e, id) {
      const payload = { id: id, status: e.target.checked }
      this.$store.commit('expenseDetails/setIsPersonal', payload)
    },
    // onchangeIsRemove (e, id) {
    //   const payload = { id: id, status: e.target.checked }
    //   this.$store.commit('expenseDetails/setIsRemove', payload)
    // },
    remove (e, id) {
      const payload = { id: id }
      this.$store.commit('expenseDetails/setIsRemove', payload)
    }
  }
}
</script>

<style scoped>
  .grid-row > div {
    border: .5px solid lightgrey;
    padding: 5px;
    background-color: aliceblue;
    margin: 5px 0;
  }
</style>
