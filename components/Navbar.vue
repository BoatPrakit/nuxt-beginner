<template>
  <div class="py-5 bg-gray-500 flex justify-between items-center">
    <div>Navbar</div>
    <div class="flex w-1/2 justify-around">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/photos">Photos</nuxt-link>
      <div class="flex text-white">
        <nuxt-link v-if="!$auth.loggedIn" to="/login">Login</nuxt-link>
        <div v-else>
          <span class="p-5">{{ $auth.user.name }}</span>
          <button @click="$auth.logout()">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>
