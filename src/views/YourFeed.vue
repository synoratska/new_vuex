<template>
 <div class="home-page">
   <BannerComp />
   <div class="container page">
    <div class="row">
     <div class="col-md-9">
      <TagFeedToggler />
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
import TagFeedToggler from '@/components/TagFeedToggler.vue'
export default {
 name: 'YourFeed',
 components: {
  FeedView,
  PopularTags,
  BannerComp,
  TagFeedToggler
 },
  data() {
   return {
    apiUrl: '/articles/feed'
   }
  }

}
</script>

<style scoped>

.home-page .banner {
  background: url('https://i.pinimg.com/originals/7a/df/0b/7adf0b9859513e795631af87f6ddb49a.jpg')  no-repeat center;
  background-position-y: bottom;
  width: 100%;
}

</style>