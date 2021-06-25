<template>
  <form @submit.prevent="login" netlify>
    <input v-model="email" type="email" />
    <input v-model="password" type="password" />
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$auth.loginWith('local', { data: payload });
      } catch (error) {
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style scoped>
input {
  border: black 1px solid;
}
</style>
