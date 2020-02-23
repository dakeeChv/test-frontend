<template>
  <v-container
    class="mt-12"
  >
    <v-form>
        <v-text-field
          v-model="username"
          label="username"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="password"
          required
        ></v-text-field>

        <v-btn
          color="warning"
          @click="signin"
        >
          Sign in
        </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import auth from '../service/auth'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async signin () {
      try {
        const response = await auth.signin({
          username: this.username,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$router.push({
          name: 'welcome'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
