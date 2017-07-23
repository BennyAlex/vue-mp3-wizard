<template>
    <span>
    <v-toolbar :style="{background: maincolor}" card>
        <v-layout row style="width: 100%">
           <v-flex xs4><v-btn icon to="index" :style="{color: fcolor}"><v-icon>arrow_back</v-icon></v-btn></v-flex>
            <v-flex xs4 style="text-align: center; height: 48px;line-height: 48px"
                    :style="{color: fcolor}">SETTINGS</v-flex>
            <v-flex xs4></v-flex>
        </v-layout>
    </v-toolbar>
    <card title="Settings">
        <div slot="content">
            <v-layout row justify-center>
                <color-picker label="Select font color" :color.sync="fcolor" :whiteAllowed="!whiteBgActive"
                              :blackAllowed="!blackBgActive"></color-picker>



            <color-picker label="Select main color" :color.sync="maincolor" :blackAllowed="!blackFontActive"
                          :whiteAllowed="!whiteFontActive"></color-picker>

                <color-picker label="Select background color" :color.sync="bgcolor" blackAllowed="true"
                          whiteAllowed="true"></color-picker>
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
  import Card from '../card'
  import ColorPicker from '../colorPicker'
  export default {
    components: {
      ColorPicker,
      Card
    },
    name: 'settings',
    computed: {
      blackBgActive() {
        return this.bgcolor === 'black'
      },
      blackFontActive() {
        return this.fcolor === 'black'
      },
      whiteBgActive() {
        return this.bgcolor === 'white'
      },
      whiteFontActive() {
        return this.fcolor === 'white'
      },
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
    }
  }
</script>
