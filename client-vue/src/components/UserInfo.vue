<template>
  <div class="main-content">
    <div>
      <span class="field-label">User:</span>
      <span
        class="field-label-value"
      >{{userDetails.userId}} - {{userDetails.firstName}} {{userDetails.lastName}}</span>
    </div>
    <div>
      <span class="field-label">MgrId / CC:</span>
      <span class="field-label-value">{{userDetails.managerId}} / {{userDetails.costCentre}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'userinfo',
  computed: {
    ...mapState({
      userDetails: state => state.commonDetails.userData
    })
  }
}
</script>

<style scoped>
.main-content {
  margin-right: 6em;
  margin-left: 6em;
}
.field-label {
  font-weight: bold;
  font-size: 1em;
  margin: 0.5em;
}
.field-label-value {
  font-weight: bold;
  color: blue;
  font-size: 1em;
  margin: 0.5em;
}
</style>
