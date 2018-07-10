<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar dark flat dense class="blue accent-4">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pb-2 pt-2">
           <v-text-field
              label="Email"
              v-model="email">
            </v-text-field>
          <br><br>
             <v-text-field
              label="Password"
              v-model="password">
            </v-text-field>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn dark class="blue accent-3" @click="register">Register</v-btn>
        </div>
      </div>
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
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
  .error{
    color: red;
  }
</style>
