<template>
  <ArticleForm
    :initial-values="initialValues"
    :errors="validationErrors"
    :is-submitting="isSubmitting"
    @articleSubmit="onSubmit"
  />
</template>

<script>
import { mapState } from 'vuex'
import{ actionTypes} from '@/store/modules/createArticle'
import ArticleForm from '@/components/ArticleForm.vue'
export default {
  name: 'CreateArticle',
  components: {
    ArticleForm,
  },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
    }
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.createArticle.isSubmitting,
      validationErrors: (state) => state.createArticle.validationErrors,
    }),
  },
  methods: {
    onSubmit(articleInput) {
      this.$store.dispatch(actionTypes.createArticle, { articleInput }).then(article => {
       this.$router.push({name: 'article', params: {slug: article.slug}})
      })
    },
  },
}
</script>

<style></style>
