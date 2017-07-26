<template>
  <my-card title="Renamer" subtitle="Tags -> Filename">
    <folder-select :folder="folder"></folder-select>

    <folder-select-button :folder.sync="folder" slot="action-left"></folder-select-button>

    <my-btn slot="action-right" :disabled="!folder" outline @click.stop="renameButtonClick">Rename</my-btn>
  </my-card>
</template>

<script>
  import FolderSelect from './folderSelect'
  import FolderSelectButton from './folderSelectButton'
  import Mp3Wizard from '../libs/mp3wizard'
  import MyCard from './my-card'
  import MyBtn from './my-btn'
  export default {
    components: {
      MyBtn,
      MyCard,
      FolderSelectButton,
      FolderSelect
    },
    name: 'renamer',
    data() {
      return {
        folder: ''
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
