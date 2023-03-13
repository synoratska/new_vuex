<template>
  <div>
   <LoadingComp v-if="isLoading"/>
    <ErrorMessage v-if="error" />

    <div v-if="feed">
      <div
        class="article-preview"
        v-for="(article, ind) in feed.articles"
        :key="ind"
      >
        <div class="article-meta">
          <router-link
            :to="{
              name: 'userProfile',
              params: { slug: article.author.username },
            }"
          >
            <img :src="article.author.image"
          /></router-link>
          <div class="info">
            <router-link
              :to="{
                user: 'userProfile',
                params: { slug: article.author.username },
              }"
              class="author"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <div class="pull-xs-right">
            <AddToFavorites 
            :is-favorited="article.favorited"
            :article-slug="article.slug"
            :favorites-count="article.favoritesCount"
            />
          </div>
        </div>
        <router-link
          :to="{ name: 'article', params: { slug: article.slug } }"
          class="preview-link"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          <TagList :tags="article.tagList" />
        </router-link>
      </div>
      <PaginationComp
        :total="feed.articlesCount"
        :limit="limit"
        :current-page="currentPage"
        :url="baseUrl"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/feed'
import PaginationComp from '@/components/Pagination'
import LoadingComp from '@/components/Loading.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import TagList from '@/components/TagList.vue'
import AddToFavorites from '@/components/AddToFavorites'
import { limit } from '@/helpers/vars'
import queryString from 'query-string'
export default {
  name: 'FeedView',
  components: {
    PaginationComp,
    LoadingComp,
    ErrorMessage,
    TagList,
    AddToFavorites
  },
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      limit,
      url: '/',
    }
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
    }),
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    baseUrl() {
      return this.$route.path
    },
    offset() {
     return this.currentPage * limit - limit
    }
  },
  watch: {
    currentPage() {
      console.log('currentPage changed')
      this.fetchFeed()
    },
    apiUrl() {
      this.fetchFeed()
    }
  },
  mounted() {
    console.log('currentPage changed')
    this.fetchFeed()
  },
  methods: {
    fetchFeed() {
      const parsedUrl = queryString.parseUrl(this.apiUrl)
      const stringifiedParams = queryString.stringify({
        limit,
        offset: this.offset,
        ...parsedUrl.query,
      })

      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`

      this.$store.dispatch(actionTypes.getFeed, { apiUrl: apiUrlWithParams })
    },
  },
}
</script>

<style scoped>
.author {
  color: #bba61f;
}
</style>
