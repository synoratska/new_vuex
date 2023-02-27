<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign Up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }" class="text">
              Already registered?
            </router-link>
          </p>
          <ValidationErrors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          />
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="username"
                v-model="username"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="email"
                v-model="email"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="password"
                v-model="password"
              />
            </fieldset>

            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isSubmitting"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ValidationErrors from '@/components/ValidationErrors.vue'
import { actionTypes } from '@/store/modules/auth'
export default {
  name: 'SignupPage',
  components: {
    ValidationErrors,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
      validationErrors: (state) => state.auth.validationErrors,
    }),
  },

  methods: {
    onSubmit() {
      console.log('Submitted')
      this.$store
        .dispatch(actionTypes.register, {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then((user) => {
          console.log('Successfully registered user', user)
          this.$router.push({ name: 'globalFeed' })
        })
    },
  },
}
</script>

<style scoped>
.text {
  color: #bba61f;
}

.btn-primary {
  background-color: #bba61f ;
  border-color:  #bba61f;
}

.btn-primary:hover {
  background-color: #a7951c;
  border-color: #a7951c;
}
</style>
