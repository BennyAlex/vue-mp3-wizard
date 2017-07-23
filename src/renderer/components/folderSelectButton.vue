<template>
  <v-btn flat @click="chooseFolder" :style="{color: btncolor}">Open Folder</v-btn>
</template>

<script>
  export default {
    name: 'FolderSelectButton',
    props: {
      folder: {
        type: String,
        required: true
      }
    },
    methods: {
      chooseFolder() {
        const {dialog} = require('electron').remote
        let folder = dialog.showOpenDialog({properties: ['openDirectory']})
        if (folder) this.$emit('update:folder', folder[0])
      }
    },
    computed: {
      btncolor() {
        return this.bgcolor !== 'white' ? this.maincolor : this.fcolor
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
