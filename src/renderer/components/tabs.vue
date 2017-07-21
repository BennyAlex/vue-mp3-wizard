<template>
    <v-tabs :dark="dark" :light="!dark" grow :scrollable='false' id='navbar'>
        <v-tabs-bar slot='activators' class='orange darken-1'>
            <v-tabs-slider v-bind:class="[dark ? 'white' : 'black']"></v-tabs-slider>
            <v-tabs-item v-bind:class="[dark ? 'white--text' : 'black--text']" href='#tab-1'
                         style="margin-left: 75px; margin-right: 70px">
                Renamer
            </v-tabs-item>
            <v-tabs-item v-bind:class="[dark ? 'white--text' : 'black--text']" href='#tab-2'
                         style="margin-left: 70px; margin-right: 75px">
                Tagger
            </v-tabs-item>
        </v-tabs-bar>

        <v-tabs-content id='tab-1'>
            <v-container fluid>
                <renamer></renamer>
            </v-container>
        </v-tabs-content>
        <v-tabs-content id='tab-2'>
            <v-container fluid>
                <tagger></tagger>
            </v-container>
        </v-tabs-content>
    </v-tabs>
</template>

<script>
  import Tagger from './tagger'
  import Renamer from './renamer'
  export default {
    name: 'tabs',
    computed: {
      dark: {
        get() {
          return this.$store.state.darkMode
        },
        set(value) {
          this.$store.commit('set_dark_mode', value)
        }
      }
    },
    components: {
      Renamer,
      Tagger
    }
  }
</script>
