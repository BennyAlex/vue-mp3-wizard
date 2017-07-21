<template>
    <span>
    <v-toolbar class='orange darken-1' card>
        <v-layout row style="width: 100%">
           <v-flex xs4><v-btn icon><v-icon
                   v-bind:class="[dark ? 'white--text' : 'black--text']">arrow_back</v-icon></v-btn></v-flex>
            <v-flex xs4 v-bind:class="[dark ? 'white--text' : 'black--text']"
                    style="text-align: center; height: 48px;line-height: 48px">SETTINGS</v-flex>
            <v-flex xs4></v-flex>
        </v-layout>
    </v-toolbar>

    <card title="Settings">
        <div slot="content">
            <v-layout row align-center>
                <v-btn @click="dark = false" class="grey darken-3" :disabled="!dark">lightmode<v-icon
                        right>wb_sunny</v-icon></v-btn>
                <v-btn @click="dark = true" class="grey--text text--darken-4 grey lighten-3" :disabled="dark">darkmode<v-icon
                        class='grey--text text--darken-4' right>brightness_2</v-icon></v-btn>
                </v-layout>

            <color-picker></color-picker>
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
  import ColorPicker from './colorPicker'
  export default {
    components: {
      ColorPicker,
      Card},
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
