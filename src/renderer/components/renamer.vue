<template>
    <card title="Renamer" subtitle="Tags -> Filename">
        <folder-select :folder="folder" slot="content"></folder-select>

        <folder-select-button :folder.sync="folder" slot="action-left"></folder-select-button>

        <v-btn outline round @click.stop="renameButtonClick" :style="{color: btncolor}" :disabled="!folder"
               slot="action-right">
            Rename
        </v-btn>
    </card>
</template>

<script>
  import FolderSelect from './folderSelect'
  import FolderSelectButton from './folderSelectButton'
  import Mp3Wizard from '../libs/mp3wizard'
  import Card from './card'
  export default {
    components: {
      Card,
      FolderSelectButton,
      FolderSelect
    },
    name: 'renamer',
    data() {
      return {
        folder: null
      }
    },
    computed: {
      btncolor() {
        return this.bgcolor !== 'white' ? this.bgcolor : this.fcolor
      },
      bgcolor: {
        get() {
          return this.$store.state.backgroundColor
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
      renameButtonClick() {
//        this.$store.commit('set_dialog_open', true)
//        this.$store.commit('set_is_loading', true)
//        Mp3Wizard.rename(this.folder).then(res => {
//          this.$store.commit('set_is_loading', false)
//          console.log('fertig: ', res)
//        })
        Mp3Wizard.renamePreview(this.folder).then(res => console.log('finish: ' + res[0].newFileName))
      }
    }
  }
</script>
