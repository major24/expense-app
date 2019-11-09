<template>
  <div class="main-content">

      <div id="action-buttons-footer" class="container-fluid">
        <div class="row">
          <div class="col-md-4 text-left">
            <span>Approvar Id</span>
            <input
              type="text"
              id="approverId"
              @change="onchangeApproverId"
              :value="userDetails.managerId"
            />
          </div>
          <div class="col-md-4 text-left">
            Cost Centre
            <input
              type="text"
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
.main-content {
  margin-right: 8em;
  margin-left: 8em;
}
#action-buttons-footer {
  margin-top: 3em;
}
</style>
