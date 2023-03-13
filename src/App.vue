<template>
  <div>
    <TopBar />
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from '@/components/Topbar.vue'
import { actionTypes } from '@/store/modules/auth'

export default {
  name: 'App',
  components: {
    TopBar,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  },
}
</script>

<style>
.btn-primary {
  background-color: #bba61f !important;
  border-color: #bba61f;
  text-transform: uppercase;
}

.btn-primary:hover {
  background-color: #a7951c !important;
  border-color: #a7951c;
  outline: none;
}

.btn-outline-primary {
  color: #a7951c;
  border-color: #a7951c;
}

.btn-outline-primary:focus {
  background-color: #a7951c !important;
  border-color: #a7951c;
}
.btn-primary:active:hover,
.btn-primary:active:focus {
  background-color: #a7951c !important;
  border-color: #a7951c;
}
</style>
