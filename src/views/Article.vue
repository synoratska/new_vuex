<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <router-link
            :to="{
              name: 'userProfile',
              params: { slug: article.author.username },
            }"
          >
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: { slug: article.author.username },
              }"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <span v-if="isAuthor">
            <router-link
              class="btn btn-outline-secondary btn-sm"
              :to="{ name: 'editArticle', params: { slug: article.slug } }"
            >
              <i class="ion-edit" />
              Edit Article
            </router-link>
            <button class="btn btn-outline-danger btn-sm" @click="deleteArticle" >
              <i class="ion-trash-a" /> Delete Article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <Loading v-if="isLoading" />
      <ErrorMessage v-if="error" :message="error" />
      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <div>
            <p>{{ article.body }}</p>
          </div>
          TAGLIST
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes as articleActionTypes } from '@/store/modules/article'
import { getterTypes as authGetterType } from '@/store/modules/auth'
import { mapState, mapGetters } from 'vuex'
import Loading from '@/components/Loading.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

export default {
  name: 'ArticleComp',
  components: {
    Loading,
    ErrorMessage,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.article.isLoading,
      article: (state) => state.article.data,
      error: (state) => state.article.error,
    }),
    ...mapGetters({
      currentUser: authGetterType.currentUser,
    }),
    isAuthor() {
      if (!this.currentUser || !this.article) {
        return false
      }
      return this.currentUser.username === this.article.author.username
    },
  },
  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {
      slug: this.$route.params.slug,
    })
  },
  methods: {
   deleteArticle() {
    this.$store.dispatch(articleActionTypes.deleteArticle, {
     slug: this.$route.params.slug
    }).then(() => {
     this.$router.push({name: 'globalFeed'})
    })
   }
  }
}
</script>

<style scoped>
.banner {
 background: url('https://cdn.pixabay.com/photo/2016/07/30/19/47/banner-1557834_1280.jpg')
}

.info a {
 color: #bba61f;
}
.article-meta span a {
 margin-right: 10px;
}

</style>
