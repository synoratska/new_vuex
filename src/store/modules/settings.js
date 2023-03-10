import {mutationTypes as authMutationTypes} from '@/store/modules/auth'

const state = {
 isSubmitting: false,
 validationErrors: null
}

const mutations = {
 [authMutationTypes.updateCurrentUserStart](state){
  state.isSubmitting = true
 },

 [authMutationTypes.updateCurrentUserSuccess](state){
  state.isSubmitting = false
 },

 [authMutationTypes.updateCurrentUserFailure](state, payload) {
  state.isSubmitting = false,
  state.validationErrors = payload
 }
}

export default {
 mutations,
 state
}