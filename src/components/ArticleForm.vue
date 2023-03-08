<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ValidationErrors v-if="errors" :validation-errors="errors" />
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="title"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Description"
                  v-model="description"
                />
              </fieldset>

              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  placeholder="What is this article about?"
                  v-model="body"
                ></textarea>
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Add Your Tags"
                  v-model="tagList"
                />
              </fieldset>

              <fieldset class="form-group">
                <button
                  type="submit"
                  class="btn btn-lg pull-xs-right btn-primary"
                  :disable="isSubmitting"
                >
                  Publish Article
                </button>
              </fieldset>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors.vue'
export default {
  name: 'ArticleForm',
  components: {
    ValidationErrors,
  },
  props: {
    initialValues: {
      type: Object,
      required: true,
    },
    errors: {
      type: Object,
      required: false,
    },
    isSubmitting: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      description: '',
      body: '',
      tagList: '',
    }
  },
  methods: {
    onSubmit() {
      const form = {
       title: this.title,
       description: this.description,
       body: this.body,
       tagList: this.tagList.split(' ')
      }
      this.$emit('articleSubmit', form)
    },
  },
}
</script>

<style scoped>
.btn-primary {
  background-color: #bba61f;
  border-color: #bba61f;
  text-transform: uppercase;
}
.btn-primary:hover {
  background-color: #a7951c;
  border-color: #a7951c;
  outline: none;
}
</style>
