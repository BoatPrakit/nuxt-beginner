<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">I here Boon</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <button @click="$store.dispatch('photos/randomName')">Click Me</button>
      <p>{{ $store.state.photos.photoName }}</p>
      <nuxt-content :document="hello"></nuxt-content>
      <p>{{ $store.state.message }}</p>
      <button @click="testDispatch">Test Dispatch Vuex</button>
      <form netlify>
        <label for="name">Name: </label>
        <input id="name" name="name" type="text" />
        <label for="lastname">LastName: </label>
        <input id="lastname" name="lastname" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['changestate'],
  async asyncData(context) {
    const hello = await context.$content('posts/helloworld').fetch();
    return { hello };
  },
  head() {
    return {
      title: 'hello-nuxt',
      meta: [
        { hid: 'description', name: 'description', content: 'Index of Nuxtjs' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Index of Nuxtjs',
        },
        { hid: 'og:title', property: 'og:title', content: 'Hello Nuxt' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Nuxt Jub Jub',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://boatprakit.github.io/images/me.png',
        },
      ],
    };
  },
  methods: {
    testDispatch() {
      this.$store.dispatch(
        'assignMessage',
        'changed message from "nothing" at middleware'
      );
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
