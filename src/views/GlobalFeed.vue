<template>
 <div class="home-page">
   BANNER
   <div class="container page">
    <div class="row">
     <div class="col-md-9">
      <FeedView :api-url="apiUrl"/>
     </div>
     <div class="col-md-3">POPULAR TAGS</div>
    </div>
   </div>

  </div>
</template>

<script>
import FeedView from '@/components/FeedView.vue'
export default {
 name: 'GlobalFeed',
 components: {
  FeedView,
 },
  data() {
   return {
    apiUrl: '/articles'
   }
  }

}
</script>

<style scoped>

</style>