
<template>
    <panel title="Youtube Video">
        <youtube
        :video-id="youtubeId"
        :player-width="800"
        :player-height="330">
        </youtube>
    </panel>
</template>
<script>
import Panel from '@/components/Panel'
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel,
    VueYouTubeEmbed
  }
}
</script>
<style scoped>
</style>
