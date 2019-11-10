<template>
  <div class="content">
    <!-- Modal -->
    <div
      class="modal fade"
      id="addExpenseModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addExpenseModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addExpenseModalLabel">Add Expense</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="form-group">
                <div id="row-header" class="row">
                  <div class="col-md-6 text-primary font-weight-bold">Date</div>
                </div>
                <div id="row-header" class="row">
                  <div class="col-md-6 mb-2">
                    <input
                      type="date"
                      class="form-control"
                      @change="onchangeDate"
                      :value="date"
                      placeholder="YYYYMMDD"
                    />
                  </div>
                </div>

                <div id="row-header" class="row">
                  <div class="col-md-6 text-primary font-weight-bold">Description</div>
                </div>
                <div id="row-header" class="row">
                  <div class="col-md-6 mb-2">
                    <input
                      type="text"
                      class="form-control"
                      @change="onchangeDescription"
                      :value="description"
                    />
                    <div class="text-danger" v-if="errors.description">{{errors.description}}</div>
                  </div>
                </div>
                <div id="row-header" class="row">
                  <div class="col-md-6 text-primary font-weight-bold">Amount</div>
                </div>
                <div id="row-header" class="row">
                  <div class="col-md-6 mb-2">
                    <input
                      type="number"
                      class="form-control"
                      @change="onchangeAmount"
                      :value="amount"
                    />
                    <div class="text-danger" v-if="errors.amount">{{errors.amount}}</div>
                  </div>
                </div>
                <div id="row-header" class="row">
                  <div class="col-md-6 text-primary font-weight-bold">Tax</div>
                </div>
                <div id="row-header" class="row">
                  <div class="col-md-6 mb-2">
                    <input type="number" class="form-control" @change="onchangeTax" :value="tax" />
                  </div>
                </div>
                <div id="row-header" class="row">
                  <div class="col-md-6 text-primary font-weight-bold">Expense Type</div>
                </div>
                <div id="row-header" class="row">
                  <div class="col-md-6 mb-2">
                    <select class="form-control" @change="onchangeCategory">
                      <option value="" selected>Select</option>
                      <option
                        v-for="category in categoryLookup"
                        :key="category.key"
                        :value="category.key"
                      >{{category.value}}</option>
                    </select>
                    <div class="text-danger" v-if="errors.category">{{errors.category}}</div>
                  </div>
                </div>
                <div id="row-header" class="row">
                  <div class="col-md-6 text-primary font-weight-bold">Notes</div>
                </div>
                <div id="row-header" class="row">
                  <div class="col-md-6 mb-2">
                    <textarea class="form-control" @change="onchangeNotes" :value="notes" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" ref="button-close" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" @click="saveExpense" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addExpenseModalPage',
  data: function () {
    return {
      date: '',
      description: '',
      amount: '',
      tax: '',
      category: '',
      notes: '',
      categoryLookup: [
        { key: 'TRVL', value: 'Travel' },
        { key: 'FOOD', value: 'Food and Bev' },
        { key: 'SUPL', value: 'Office Supplies' },
        { key: 'TAXI', value: 'Taxi and Transportation' },
        { key: 'ACCM', value: 'Hotel Accomodation' },
        { key: 'ENT1', value: 'Entertainment' },
        { key: 'PROM', value: 'Business Promotions' },
        { key: 'OTHR', value: 'Other' }
      ],
      errors: {
        date: '',
        description: '',
        amount: '',
        expenseType: ''
      }
    }
  },
  methods: {
    onchangeDate (e) {
      this.date = e.target.value
    },
    onchangeDescription (e) {
      this.errors.description = ''
      this.description = e.target.value
    },
    onchangeAmount (e) {
      this.errors.amount = ''
      this.amount = e.target.value
    },
    onchangeTax (e) {
      this.tax = e.target.value
    },
    onchangeCategory (e) {
      this.errors.category = ''
      this.category = e.target.value
    },
    onchangeNotes (e) {
      this.notes = e.target.value
    },
    saveExpense (event) {
      if (!this.isValidForm()) return false
      const payload = {
        transType: 'OP',
        description: this.description,
        amount: this.amount,
        tax: this.tax,
        category: this.category,
        transDate: this.date
      }
      this.$store.commit('expenseDetails/addTransaction', payload)
      this.clearInputData()
      this.$refs['button-close'].click()
    },
    clearInputData () {
      this.date = ''
      this.description = ''
      this.amount = ''
      this.tax = ''
      this.category = ''
      this.notes = ''
    },
    isValidForm () {
      let errors = {}
      if (!this.description) {
        errors.description = 'Description is required'
      }
      if (!this.amount) {
        errors.amount = 'Amount is required'
      }
      if (!this.category) {
        errors.category = 'Expense type is required'
      }
      // merge local error with comp state errors property
      this.errors = { ...this.errors, ...errors }
      // if any errors, send back false
      if (Object.keys(errors).length === 0) {
        return true
      }

      return false
    }
  }
}
</script>

<style scoped>
.content {
  margin-right: 8em;
  margin-left: 8em;
}
</style>
