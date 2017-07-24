<template>
  <div :style="{border: '2px solid ' + maincolor}">
    <v-toolbar :style="{background: maincolor}" class='app-draggable' id="navbar" card dense>
      <v-toolbar-title :style="{color: fcolor}">mp3-wizard</v-toolbar-title>
      <v-spacer class='app-draggable'></v-spacer>
      <v-btn icon
             v-for="button in buttons"
             :key="button.icon"
             class='app-dragginable'
             @click="button.onClick"
      >
        <v-icon :style="{color: fcolor}">
          {{ button.icon }}
        </v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    props: {
      buttons: {
        type: Array,
        required: true
      }
    },
    computed: {
      bgcolor: {
        get() {
          return this.$store.state.bgColor
        },
        set(value) {
          this.$store.commit('set_bg_color', value)
        }
      },
      fcolor: {
        get() {
          return this.$store.state.fontColor
        },
        set(value) {
          this.$store.commit('set_font_color', value)
        }
      },
      maincolor: {
        get() {
          return this.$store.state.mainColor
        },
        set(value) {
          this.$store.commit('set_main_color', value)
        }
      }
    }
  }
</script>

<style scoped>
  .toolbar--card {
    border-radius: 0;
  }
</style>
