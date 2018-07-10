<template>
    <v-toolbar dark fixed class="blue accent-2">
        <v-toolbar-title class="mr-4">
            <span class="home"
            @click="navigateTo({name:'root'})">
            Symmetrical Disco
            </span>
        </v-toolbar-title>

        <!-- TODO: Implement Me
            <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items> -->

        <v-spacer><!--space everything to the right after this-->
        </v-spacer>

        <v-toolbar-items>
            <v-btn flat dark>
                <router-link to="register">
                    Sign Up
                </router-link>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
