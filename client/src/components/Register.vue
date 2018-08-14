<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
          <form
            name="tab-tracker-form"
            autocomlete="off">
           <v-text-field
              label="Email"
              v-model="email">
            </v-text-field>
          <br><br>
             <v-text-field
              type="password"
              label="Password"
              v-model="password"
              autocomplete="new-password">
            </v-text-field>
            </form>
          <br>
          <div class="danger-alert" v-html="error" />
          <br>
          <v-btn dark class="blue accent-3" @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  // watch: {
  //   email (value) {
  //     console.log('email has changed', value)
  //   }
  // },
  // mounted () {
  //   setTimeout(function () {
  //     this.email = 'hello world'
  //   }, 2000)
  // },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
</style>
