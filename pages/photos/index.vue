<template>
  <div>
    <div class="flex flex-wrap">
      <img
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.download_url"
        :alt="photo.author"
        width="200px"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const photos = await $axios.$get('/v2/list?limit=20');
    return { photos };
  },
};
</script>

<style></style>
