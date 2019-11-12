<template>
  <div class="main-content">
    <!-- <p>{{userDetails}}</p> -->
    <!-- <p>{{costCentreApproverDetails}}</p> -->
    <!-- <p>: {{this.selectedCc}}</p>
    <p>>>>: {{this.approvals}}</p> -->
    <div id="grid" class="container-fluid">
      <div class="row">
        <div class="col-md-2 text-primary font-weight-bold">Cost Centre</div>
        <div class="col-md-4 text-info font-weight-bold">
          <select class="form-control" @change="onchangeCostCentre">
            <option value="">Select</option>
            <option
              v-for="cc in costCentreApproverDetails"
              :key="cc.costCentre.id"
              :value="cc.costCentre.id"
            >{{cc.costCentre.description}}</option>
          </select>
          <div class="text-danger" v-if="errorDetails.costCentre">{{errorDetails.costCentre}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 text-primary font-weight-bold">Approver</div>
        <div class="col-md-4 text-info font-weight-bold">
          <select v-if="userDetails.costCentre" class="form-control" @change="onchangeApproverId">
            <option value="">Select</option>
            <option
              v-for="item in options"
              :key="item.userId"
              :value="item.userId"
            >{{item.firstName}} {{item.lastName}}</option>
          </select>
          <div class="text-danger" v-if="errorDetails.approverId">{{errorDetails.approverId}}</div>
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
      costCentreApproverDetails: state => state.expenseDetails.costCentreApprovals,
      errorDetails: state => state.expenseDetails.errors,
      approvals: state => state.expenseDetails.approvals,
      selectedApprovers: state => (value) => this.approvals.filter(x => x.id === value)
    })
  },
  data: function () {
    return {
      selectedCc: '',
      options: []
    }
  },
  methods: {
    onchangeApproverId (e) {
      const value = e.target.value
      this.$store.commit('expenseDetails/setApproverId', value)
      this.$store.commit('expenseDetails/resetError', 'approverId')
    },
    onchangeCostCentre (e) {
      const value = e.target.value
      this.selectedCc = value
      this.$store.commit('expenseDetails/setCostCentre', value)
      this.options = this.approvals.filter(x => x.id === value)
      this.$store.commit('expenseDetails/resetError', 'costCentre')
    }
  }
}
</script>

<style scoped>
</style>
