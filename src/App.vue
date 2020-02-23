<template>
  <v-app>
    <HomePage/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage'

export default {
  name: 'App',

  components: {
    HomePage
  },

  data: () => ({
    //
  })
}
</script>
