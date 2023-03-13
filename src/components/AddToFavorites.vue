<template>
  <div>Add To Favorites</div>
</template>

<script>
export default {
 name: 'AddToFavorites',
 props: {
  isFavorited: {
   type: Boolean,
   required: true
  },
  articleSlug: {
   type: String,
   required: true
  },
  favoritesCount: {
   type: Number,
   required: true
  }
 }
}
</script>

<style>

</style>