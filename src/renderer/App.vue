<template>
    <div id='app'>
        <v-app :dark="dark" :light="!dark">
            <navbar>
                <v-btn icon class='app-dragginable' @click="minimizeApp" slot="icon-left">
                    <v-icon v-bind:class="[dark ? 'white--text' : 'black--text']">remove</v-icon>
                </v-btn>

                <v-btn icon class='app-dragginable' @click="settingsClick" slot="icon-center">
                    <v-icon v-bind:class="[dark ? 'white--text' : 'black--text']">settings</v-icon>
                </v-btn>

                <v-btn icon class='app-dragginable' @click="exitApp" slot="icon-right">
                    <v-icon v-bind:class="[dark ? 'white--text' : 'black--text']">close</v-icon>
                </v-btn>
            </navbar>

            <router-view></router-view>

            <v-layout row justify-center>
                <v-dialog v-model="dialogOpen" :persistent="isLoading">
                    <v-card>

                        <v-container fluid>
                            <v-layout align-center justify-space-around>
                                <h5 v-if="isLoading">
                                    Loading, please wait...
                                </h5>
                                <h5 v-else>
                                    <b>Process finished!</b>
                                </h5>

                                <v-progress-circular v-if="isLoading" indeterminate class="orange--text darken-1--text"
                                                     v-bind:size="58"
                                                     v-bind:width="4"></v-progress-circular>

                            </v-layout>
                        </v-container>

                        <v-card-actions v-if="!isLoading">
                            <v-spacer></v-spacer>
                            <v-btn flat class="orange--text darken-1--text" @click="dialogOpen = false">Close</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>

                    </v-card>
                </v-dialog>
            </v-layout>
        </v-app>
    </div>
</template>

<script>
  import Navbar from './components/navbar'

  export default {
    name: 'mp3-wizard',
    components: {
      Navbar
    },
    computed: {
      isLoading: {
        get() {
          return this.$store.state.isLoading
        },
        set(value) {
          this.$store.commit('set_is_loading', value)
        }
      },
      dialogOpen: {
        get() {
          return this.$store.state.dialogOpen
        },
        set(value) {
          this.$store.commit('set_dialog_open', value)
        }
      },
      dark: {
        get() {
          return this.$store.state.darkMode
        },
        set(value) {
          this.$store.commit('set_dark_mode', value)
        }
      }
    },
    methods: {
      minimizeApp() {
        const {remote} = require('electron')
        remote.BrowserWindow.getFocusedWindow().minimize()
      },
      exitApp() {
        const app = require('electron').remote.app
        if (this.$store.state.isLoading) alert('There is a running process, please wait')
        else app.quit()
      },
      settingsClick() {
        if (this.$route.name !== 'settings') {
          this.$router.push({ name: 'settings' })
          return
        }
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
    @import "style.css";
</style>
