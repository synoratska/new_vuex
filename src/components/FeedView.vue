<template>
  <div>Feed {{apiUrl  }}</div>
</template>

<script>
export default {
  name: 'FeedView',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
