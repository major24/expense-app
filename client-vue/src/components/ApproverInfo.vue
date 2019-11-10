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
              :value="userDetails.managerId"
            />
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
      userDetails: state => state.commonDetails.userData
    })
  },
  methods: {
    onchangeCostCentre (e) {
      this.$store.commit('exenseDetails/setCostCentre', e.target.value)
    },
    onchangeApproverId (e) {
      this.$store.commit('expenseDetails/setApproverId', e.target.value)
    }
  }
}
</script>

<style scoped>
</style>
