<template>
  <v-app :style="{background: bgcolor}">
    <navbar :buttons="navbarButtons"></navbar>

    <router-view></router-view>

    <my-dialog id="loading-dialog" v-model="isLoading" title="Loading, please wait..." :centerTitle="true">
      <div>
        <v-layout column align-center justify-space-around>
          <v-progress-circular indeterminate class="orange--text darken-1--text"
                               v-bind:size="58"
                               v-bind:width="4">
          </v-progress-circular>
        </v-layout>
      </div>
    </my-dialog>

    <!--<v-layout row justify-center>-->
    <!--<v-dialog v-model="dialogOpen" :persistent="isLoading" width="auto">-->
    <!--<v-card>-->
    <!--<v-container fluid>-->
    <!--<v-layout column align-center justify-space-around>-->
    <!--<h5 v-if="isLoading">-->
    <!--Loading, please wait...-->
    <!--</h5>-->
    <!--<h5 v-else>-->
    <!--<b>Process finished!</b>-->
    <!--</h5>-->
    <!--<v-progress-circular v-if="isLoading" indeterminate class="orange&#45;&#45;text darken-1&#45;&#45;text"-->
    <!--v-bind:size="58"-->
    <!--v-bind:width="4">-->

    <!--</v-progress-circular>-->
    <!--</v-layout>-->
    <!--</v-container>-->

    <!--<v-card-actions v-if="!isLoading">-->
    <!--<v-spacer></v-spacer>-->
    <!--<v-btn flat class="orange&#45;&#45;text darken-1&#45;&#45;text" @click="dialogOpen = false">Close</v-btn>-->
    <!--<v-spacer></v-spacer>-->
    <!--</v-card-actions>-->
    <!--</v-card>-->
    <!--</v-dialog>-->
    <!--</v-layout>-->
  </v-app>
</template>

<script>
  import Navbar from './components/navbar'
  import MyDialog from './components/my-dialog'

  export default {
    name: 'mp3-wizard',
    components: {
      MyDialog,
      Navbar
    },
    data() {
      return {
        navbarButtons: [{
          icon: 'remove',
          onClick: this.minimizeApp
        }, {
          icon: 'settings',
          onClick: this.settingsClick
        }, {
          icon: 'close',
          onClick: this.exitApp
        }]
      };
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
      bgcolor: {
        get() {
          return this.$store.state.bgColor
        },
        set(value) {
          this.$store.commit('set_bg_color', value)
        }
      },
      lastRoute() {
        return this.$store.state.lastRoute
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
          this.$router.push({name: 'settings'})
        }
        else if (this.$store.state.lastRouteName) {
          this.$router.go(-1)
        }
        else {
          this.$router.push({name: 'index'})
        }
      }
    }
  }
</script>

<style>
  @import "style.css";
</style>
