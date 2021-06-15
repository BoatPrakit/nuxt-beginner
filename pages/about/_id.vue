<template>
  <h1>Your param id: {{ id }}</h1>
</template>

<script>
export default {
  validate({ params }) {
    return params.id === '1';
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style></style>
