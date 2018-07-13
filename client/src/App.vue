<template>
  <div id="app">
    <v-app>
      <page-header />
      <main>
        <v-container fluid>
          <router-view>
          </router-view>
        </v-container>
      </main>
    </v-app>
    <!-- <img src="./assets/logo.png"> -->

  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.danger-alert{
  background-color: #FF5252
}
/* .v-text-field__slot input{
  border-bottom: 1px solid black;
} */
/* .v-toolbar__title{
  color: white;
}
.v-btn__content{
  color: white;
} */
</style>
