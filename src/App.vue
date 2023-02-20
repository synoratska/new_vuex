<template>
  <div>
    <TopBar />
    <router-view></router-view>
  </div>
</template>

<script>

import TopBar from '@/components/Topbar.vue'

export default {
  name: 'App',
  components: {
    TopBar,
  },
  
}
</script>
