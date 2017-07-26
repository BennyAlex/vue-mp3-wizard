<template>
  <span>
  <v-toolbar :style="{background: maincolor}" dense card>
    <v-layout row style="width: 100%">
     <v-flex xs4><v-btn icon @click="backBtnClick" :style="{color: fcolor}"><v-icon>arrow_back</v-icon></v-btn></v-flex>
      <v-flex xs4 style="text-align: center; height: 48px;line-height: 48px"
              :style="{color: fcolor}">SETTINGS</v-flex>
      <v-flex xs4></v-flex>
    </v-layout>
  </v-toolbar>
    <div class="content-container">
      <my-card title="Settings">
        <v-layout row align-start wrap justify-center>
          <color-picker-wrapper label="Select font color" v-model="fcolor"></color-picker-wrapper>

          <color-picker-wrapper label="Select main color" v-model="maincolor"></color-picker-wrapper>

          <color-picker-wrapper label="Select background color" v-model="bgcolor"></color-picker-wrapper>
        </v-layout>
      </my-card>
    </div>
  </span>

  <!--<color-picker label="Select main color" v-model="maincolor"></color-picker>-->
</template>

<script>
  import MyCard from '../my-card'
  import ColorPickerWrapper from '../ColorPickerWrapper'
  import ColorPicker from '../ColorPicker/ColorPicker'

  export default {
    components: {
      ColorPicker,
      ColorPickerWrapper,
      MyCard
    },
    name: 'settings',
    computed: {
      maincolor: {
        get() {
          return this.$store.state.mainColor
        },
        set(value) {
          this.$store.commit('set_main_color', value)
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
      fcolor: {
        get() {
          return this.$store.state.fontColor
        },
        set(value) {
          this.$store.commit('set_font_color', value)
        }
      }
    },
    methods: {
      backBtnClick() {
        if (this.$store.state.lastRouteName) {
          this.$router.go(-1)
        }
        else {
          this.$router.push({name: 'index'})
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
