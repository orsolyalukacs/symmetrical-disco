
<template>
    <div class="white elevation-2">
        <v-toolbar dark flat dense class="blue accent-4">
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <slot name="action" />
        </v-toolbar>
        <div class="pl-4 pr-4 pb-2 pt-2">
            <slot>
                No slot content defined.
            </slot>
        </div>
      </div>
</template>
<script>
export default {
  props: [
    'title'
  ]
}
</script>
<style scoped>
</style>
