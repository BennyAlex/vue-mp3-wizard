<template>
    <v-toolbar class='orange darken-1 app-draggable' dark dense>
        <router-link to="index" class="app-dragginable" style="text-decoration: none">
            <v-toolbar-title v-bind:class="[dark ? 'white--text' : 'black--text']" class="app-dragginable" style="margin-left: 0">mp3-wizard
            </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <slot name="icon-left"></slot>
        <slot name="icon-center"></slot>
        <slot name="icon-right"></slot>
    </v-toolbar>
</template>

<script>
  export default {
    name: 'navbar',
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
