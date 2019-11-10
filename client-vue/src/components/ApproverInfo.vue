<template>
  <div class="main-content">
        <div id="grid" class="container-fluid">
      <div class="row">
        <div class="col-md-2 text-primary font-weight-bold">Approver ID</div>
        <div class="col-md-4 text-info font-weight-bold">
            <input
              type="text"
              class="form-control"
              id="approverId"
              @change="onchangeApproverId"
              :value="userDetails.approverId"
            />
            <div class="text-danger" v-if="errorDetails.approverId">{{errorDetails.approverId}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 text-primary font-weight-bold">Cost Centre</div>
        <div class="col-md-4 text-info font-weight-bold">
            <input
              type="text"
              class="form-control"
              id="costCentre"
              @change="onchangeCostCentre"
              :value="userDetails.costCentre"
            />
            <div class="text-danger" v-if="errorDetails.costCentre">{{errorDetails.costCentre}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'approverInfo',
  computed: {
    ...mapState({
      userDetails: state => state.expenseDetails.user,
      errorDetails: state => state.expenseDetails.errors
    })
  },
  methods: {
    onchangeApproverId (e) {
      const value = e.target.value
      this.$store.commit('expenseDetails/setApproverId', value)
      this.$store.commit('expenseDetails/resetError', 'approverId')
    },
    onchangeCostCentre (e) {
      const value = e.target.value
      this.$store.commit('expenseDetails/setCostCentre', value)
      this.$store.commit('expenseDetails/resetError', 'costCentre')
    }
  }
}
</script>

<style scoped>
</style>
