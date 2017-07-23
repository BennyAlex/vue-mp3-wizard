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
            <v-layout row wrap>
                <ColorPickerDialog label="Select font color">
                    <ColorPicker v-model="fcolor" slot="content"></ColorPicker>
                </ColorPickerDialog>
                <ColorPickerDialog label="Select main color">
                    <ColorPicker v-model="maincolor" slot="content"></ColorPicker>
                </ColorPickerDialog>
                <ColorPickerDialog label="Select background color">
                        <ColorPicker v-model="bgcolor" slot="content"></ColorPicker>
                </ColorPickerDialog>
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
  import ColorPickerDialog from '../ColorPickerDialog'
  import {ColorPicker} from '../ColorPicker/index'

  export default {
    components: {
      ColorPickerDialog,
      ColorPicker,
      Card
    },
    name: 'settings',
    computed: {
      mainColorIsDark() {
        return this.maincolor === 'black' || this.maincolor === '#333' || this.maincolor === '#444' || this.maincolor === '#555' || this.maincolor === '#666' || this.maincolor === 'blue'
      },
      fontColorIsDark() {
        return this.fcolor === 'black' || this.fcolor === '#333' || this.fcolor === '#444' || this.fcolor === '#555' || this.fcolor === '#666' || this.fcolor === 'blue'
      },
      mainColorIsLight() {
        return this.maincolor === 'white' || this.maincolor === '#bbb' || this.maincolor === '#ccc' || this.maincolor === '#ddd' || this.maincolor === 'yellow'
      },
      fontColorIsLight() {
        return this.fcolor === 'white' || this.fcolor === '#bbb' || this.fcolor === '#ccc' || this.fcolor === '#ddd' || this.fcolor === 'yellow'
      },
      hiddenFontColors() {
        const colors = [this.maincolor]
        if (this.mainColorIsLight) {
          colors.push('yellow', 'white')
        }
        if (this.mainColorIsDark) {
          colors.push('black', 'blue')
        }
        return colors
      },
      hiddenMainColors() {
        const colors = [this.fontcolor]
        if (this.fontColorIsLight) {
          colors.push('yellow', 'white')
        }
        if (this.fontColorIsDark) {
          colors.push('black', 'blue')
        }
        return colors
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
