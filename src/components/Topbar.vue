<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-bran" :to="{ name: 'globalFeed' }">
        <img class="logo" src="@/assets/logo.svg" /> &nbsp;
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'globalFeed' }"
            exact
            active-class="active"
          >
            Home</router-link
          >
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'createArticle' }"
              active-class="active"
            >
              <i class="ion-compose"></i> &nbsp; New Article</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'settings' }"
              active-class="active"
            >
              <i class="ion-gear-a"> &nbsp; </i>Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{
                name: 'userProfile',
                params: { slug: currentUser.username },
              }"
            >
              <img class="user-pic" :src="currentUser.image" /> &nbsp;
              {{ currentUser.username }}</router-link
            >
          </li>
        </template>
        <template v-if="isAnonymous">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'login' }"
              active-class="active"
            >
              Sign In</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'signup' }"
              active-class="active"
            >
              Sign Up</router-link
            >
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { getterTypes } from '@/store/modules/auth'
import { mapGetters } from 'vuex'

export default {
  name: 'TopBar',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
}
</script>

<style scoped>
.navbar-bran {
  color: #bba61f;
  font-weight: 800;
  text-decoration: none;
  font-size: 20px;
}

.navbar-light .navbar-nav .nav-link {
  color: #bba61f;
  text-transform: uppercase;
}

.logo {
  max-width: 40px;
  max-height: 40px;
}

.logo img {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.user-pic {
  border-radius: 50%;
  max-width: 25px;
  max-height: 25px;
}

.ion-compose,
.ion-gear-a {
  color: #bba61f;
}
</style>
