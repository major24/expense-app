<template>
  <div class="main-content">
    <div id="grid" class="container-fluid">
      <div class="row">
        <div class="col-sm-1 text-primary font-weight-bold">User:</div>
        <div class="col-md-6 text-info font-weight-bold">{{userDetails.userId}} - {{userDetails.firstName}} {{userDetails.lastName}}</div>
      </div>
      <div class="row">
        <div class="col-sm-1 text-primary font-weight-bold">MgrID:</div>
        <div class="col-md-6 text-info font-weight-bold">{{userDetails.managerId}}</div>
      </div>
      <div class="row">
        <div class="col-sm-1 text-primary font-weight-bold">CC:</div>
        <div class="col-md-6 text-info font-weight-bold">{{userDetails.costCentre}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'userinfo',
  computed: {
    ...mapState({
      userDetails: state => state.expenseDetails.user
    })
  }
}
</script>

<style scoped>
</style>
