
<template>
    <panel title="Lyrics">
      <textarea
            label="Lyrics"
            v-model="song.lyrics"
            readonly>
      </textarea>
    </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>
<style scoped>
 textarea{
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;

  }
</style>
