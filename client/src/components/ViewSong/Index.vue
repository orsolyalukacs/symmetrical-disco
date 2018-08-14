
<template>
  <div>
    <v-layout>
      <!--Song Metadata-->
      <v-flex xs6>
         <song-metadata :song="song" />
      </v-flex>
      <!--Youtube-->
      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>
    <!--Tab-->
    <v-layout>
      <v-flex xs6 class="ml-2 mt-2">
        <tab :song="song">
        </tab>
      </v-flex>
      <!--Lyrics-->
      <v-flex xs6 class="ml-2 mt-2">
        <lyrics :song="song">
        </lyrics>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
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
