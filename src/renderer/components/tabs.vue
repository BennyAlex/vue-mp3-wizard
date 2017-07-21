<template>
    <v-tabs :dark="dark" :light="!dark" grow :scrollable='false' id='navbar'>
        <v-tabs-bar slot='activators' class='orange darken-1'>
            <v-tabs-slider v-bind:class="[dark ? 'white' : 'black']"></v-tabs-slider>
            <v-tabs-item
                v-for="tab in tabs"
                :key="tab"
                :href="`#${tab}`"
                v-bind:class="[dark ? 'white--text' : 'black--text']"
            >
                {{ tab }}
            </v-tabs-item>
        </v-tabs-bar>

        <v-tabs-content id='renamer'>
            <v-container fluid>
                <renamer></renamer>
            </v-container>
        </v-tabs-content>
        <v-tabs-content id='tagger'>
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
    data() {
      return {
        tabs: ['renamer', 'tagger']
      };
    },
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
