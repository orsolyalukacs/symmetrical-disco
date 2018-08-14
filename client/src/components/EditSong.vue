
<template>
<div>
    <v-layout>
        <v-flex xs4>
            <panel title="Song Metadata">
                <v-text-field
                    required
                    :rules="[required]"
                    label="Title"
                    v-model="song.title"
                ></v-text-field>

                <v-text-field
                    required
                    :rules="[required]"
                    label="Artist"
                    v-model="song.artist"
                ></v-text-field>

                <v-text-field
                    label="Genre"
                    v-model="song.genre"
                ></v-text-field>

                <v-text-field
                    required
                    :rules="[required]"
                    label="Album"
                    v-model="song.album"
                ></v-text-field>

                <v-text-field
                    label="Album Image Url"
                    v-model="song.albumImageUrl"
                ></v-text-field>
                <v-text-field
                    label="Youtube ID"
                    v-model="song.youtubeId"
                ></v-text-field>
            </panel>
        </v-flex>
        <v-flex xs8>
            <panel title="Song Structure" class="ml-2">
                <v-textarea
                    label="Tab"
                    v-model="song.tab"
                ></v-textarea>
                <v-textarea
                    label="Lyrics"
                    v-model="song.lyrics"
                ></v-textarea>
            </panel>
            <v-alert
                class="ml-4"
                :value="error"
                transition="scale-transition"
                error>
                {{error}}
            </v-alert>
            <v-btn
                dark
                class="blue accent-3"
                @click="save">
                Save Song
            </v-btn>
        </v-flex>
    </v-layout>
</div>
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  },
  components: {
    Panel
  }
}
</script>
<style scoped>
</style>
