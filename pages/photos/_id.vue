<template>
  <div>
    <img :src="photo.download_url" :alt="photo.author" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const photo = await $axios.$get(
      `https://picsum.photos/id/${params.id}/info`
    );
    return { photo };
  },
};
</script>

<style></style>
