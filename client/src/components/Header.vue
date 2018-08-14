<template>
    <v-toolbar dark fixed class="blue accent-2">
        <v-toolbar-title class="mr-4">
            <router-link
            class="home"
            tag="span"
            :to="{
                name:'songs'
                }">
            Symmetrical Disco
            </router-link>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn
            flat
            dark
            :to="{
                name:'songs'
                }">
                Browse
            </v-btn>
        </v-toolbar-items>

        <v-spacer><!--space everything to the right after this-->
        </v-spacer>

        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn"
            flat
            dark
            :to="{
                name:'register'}
                ">
                    Sign Up
            </v-btn>

            <v-btn v-if="!$store.state.isUserLoggedIn"
            flat
            dark
            :to="{
                name:'login'
                }">
                Login
            </v-btn>

             <v-btn v-if="$store.state.isUserLoggedIn"
             flat
             dark
            :to="{
                name:'logout'}
                ">
                Log Out
            </v-btn>

        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: white;
}
.home {
    cursor: pointer;
}

.home:hover{
    color:#e9e;
}
</style>
