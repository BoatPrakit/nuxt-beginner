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
  middleware: ['auth'],
  async asyncData({ $axios }) {
    const photos = await $axios.$get('https://picsum.photos/v2/list?limit=5');
    return { photos };
  },
};
</script>

<style></style>
