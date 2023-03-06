<template>
 <div class="home-page">
   <BannerComp />
   <div class="container page">
    <div class="row">
     <div class="col-md-9">
      <FeedView :api-url="apiUrl"/>
     </div>
     <div class="col-md-3">
      <PopularTags />
     </div>
    </div>
   </div>

  </div>
</template>

<script>
import FeedView from '@/components/FeedView.vue'
import PopularTags from '@/components/PopularTags.vue'
import BannerComp from '@/components/Banner.vue'
export default {
 name: 'GlobalFeed',
 components: {
  FeedView,
  PopularTags,
  BannerComp
 },
computed: {
  apiUrl() {
    const tagName = this.$route.params.slug
    return `/articles?tag=${tagName}`
  }
}
}
</script>

<style scoped>

.home-page .banner {
  background: url('http://www.techelium.in/wp-content/uploads/2015/10/blog-banner-1024x322.jpg') no-repeat center;
  width: 100%;
}

</style>