<template>
  <div class="home-page">
    <BannerComp />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <TagFeedToggler />
          <FeedView :api-url="apiUrl" />
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
  name: 'GlobalFeed',
  components: {
    FeedView,
    PopularTags,
    BannerComp,
    TagFeedToggler,
  },
  data() {
    return {
      apiUrl: '/articles',
    }
  },
  computed: {},
}
</script>

<style scoped>
.home-page .banner {
  background: url('http://www.techelium.in/wp-content/uploads/2015/10/blog-banner-1024x322.jpg')
    no-repeat center;
  width: 100%;
}
</style>
