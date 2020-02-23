<template>
  <v-container
    class="mt-12"
  >
    <v-form>
        <v-text-field
          v-model="username"
          label="Username"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          required
        ></v-text-field>

        <v-text-field
          v-model="classroom_id"
          label="classroom"
          required
        ></v-text-field>

        <v-text-field
          v-model="userType_id"
          label="level"
          required
        ></v-text-field>

        <v-btn
          color="warning"
          @click="signup"
        >
          Sign up
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
      password: '',
      classroom_id: '',
      userType_id: ''
    }
  },
  methods: {
    async signup () {
      try {
        await auth.signup({
          username: this.username,
          password: this.password,
          classroom_id: this.classroom_id,
          userType_id: this.userType_id
        })
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
