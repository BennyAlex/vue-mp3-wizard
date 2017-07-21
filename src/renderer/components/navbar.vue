<template>
    <v-toolbar class='orange darken-1 app-draggable' dark dense>
        <v-toolbar-title v-bind:class="[dark ? 'white--text' : 'black--text']">mp3-wizard
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon
          v-for="button in buttons"
          :key="button.icon"
          class='app-dragginable'
          @click="button.onClick"
        >
          <v-icon v-bind:class="[dark ? 'white--text' : 'black--text']">
            {{ button.icon }}
          </v-icon>
        </v-btn>
    </v-toolbar>
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
      dark: {
        get() {
          return this.$store.state.darkMode
        },
        set(value) {
          this.$store.commit('set_dark_mode', value)
        }
      }
    }
  }
</script>
