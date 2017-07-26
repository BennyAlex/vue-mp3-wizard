<template>
  <v-tabs grow :scrollable='false' id='tabs'>
    <v-tabs-bar slot='activators' :style="{background: maincolor}">
      <v-tabs-slider :style="{background: fcolor}"></v-tabs-slider>
      <v-tabs-item
        v-for="tab in tabs"
        :key="tab"
        :href="`#${tab}`"
      >
        <span :style="{color: fcolor}">{{ tab }}</span>
      </v-tabs-item>
    </v-tabs-bar>

    <v-tabs-content id='renamer'>
      <div class="content-container">
        <renamer></renamer>
      </div>
    </v-tabs-content>
    <v-tabs-content id='tagger'>
      <div class="content-container">
        <tagger></tagger>
      </div>
    </v-tabs-content>
  </v-tabs>
</template>

<script>
  import Tagger from '../tagger'
  import Renamer from '../renamer'
  export default {
    name: 'start',
    data() {
      return {
        tabs: ['renamer', 'tagger']
      };
    },
    computed: {
      maincolor: {
        get() {
          return this.$store.state.mainColor
        },
        set(value) {
          this.$store.commit('set_main_color', value)
        }
      },
      fcolor: {
        get() {
          return this.$store.state.fontColor
        },
        set(value) {
          this.$store.commit('set_font_color', value)
        }
      }
    },
    components: {
      Renamer,
      Tagger
    }
  }
</script>
