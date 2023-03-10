<template>
  <div>
    <Loading v-if="isLoading" />
    <ArticleForm
      v-if="initialValues"
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
    ></ArticleForm>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/editArticle'
import ArticleForm from '@/components/ArticleForm'
import Loading from '@/components/Loading'
export default {
  name: 'EditArticle',
  components: {
    ArticleForm,
    Loading,
  },

  computed: {
    ...mapState({
      isLoading: state => state.editArticle.isLoading,
      article: state => state.editArticle.article,
      isSubmitting: state => state.editArticle.isSubmitting,
      validationErrors: state => state.editArticle.validationErrors
    }),
    initialValues() {
      if (!this.article) {
        return null
      }
      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
        tagList: this.article.tagList
      }
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getArticle, {
      slug: this.$route.params.slug
    })
  },
  methods: {
    onSubmit(articleInput) {
      const slug = this.$route.params.slug
      this.$store
        .dispatch(actionTypes.updateArticle, {articleInput, slug})
        .then(article => {
          this.$router.push({name: 'article', params: {slug: article.slug}})
        })
    }
  }
}
</script>

<style></style>
