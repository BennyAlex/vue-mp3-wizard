<template>
    <span>
    <v-toolbar class='orange darken-1' dark card>
        <v-layout row align-center>
            <v-flex xs6>SETTINGS</v-flex>
        </v-layout>


    </v-toolbar>

    <card title="Settings">
        <div slot="content">
            <v-layout row align-center>
                <v-btn @click="dark = false" class="grey darken-3" :disabled="!dark">Switch to lightmode<v-icon class="pl-2">wb_sunny</v-icon></v-btn>
                <v-btn @click="dark = true" class="grey--text text--darken-4 grey lighten-3" :disabled="dark">Switch to darkmode<v-icon
                        class='grey--text text--darken-4 pl-2'>brightness_2</v-icon></v-btn>
                </v-layout>
        </div>

        <!--
        <v-btn flat class="orange&#45;&#45;text text&#45;&#45;darken-2"
               slot="action-left">
            cancel
        </v-btn>
        <v-btn outline round class="orange&#45;&#45;text text&#45;&#45;darken-2"
               slot="action-right">
            save
        </v-btn>
        -->
    </card>
        </span>
</template>

<script>
  import Card from './card'
  export default {
    components: {Card},
    name: 'settings',
    data() {
      return {
        toggle_mode: [
          {text: 'lightmode', icon: 'wb_sunny', value: false},
          {text: 'darkmode', icon: 'brightness_2', value: true}
        ]
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
