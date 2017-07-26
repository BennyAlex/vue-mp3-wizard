<template>
  <my-card title="Tagger" subtitle="Filename -> Tags">
    <folder-select :folder="folder"></folder-select>

    <folder-select-button :folder.sync="folder" slot="action-left"></folder-select-button>

    <my-btn slot="action-right" @click.stop="tagButtonClick"  :disabled="!folder" outline>Tag</my-btn>
  </my-card>
</template>

<script>
  import Mp3Wizard from '../libs/mp3wizard'
  import FolderSelect from './folderSelect'
  import FolderSelectButton from './folderSelectButton'
  import MyCard from './my-card'
  import MyBtn from './my-btn'

  export default {
    components: {
      MyBtn,
      MyCard,
      FolderSelectButton,
      FolderSelect
    },
    name: 'tagger',
    data() {
      return {
        folder: '',
        dialogOpen: false
      }
    },
    methods: {
      tagButtonClick() {
        this.$store.commit('set_dialog_open', true)
        this.$store.commit('set_is_loading', true)
        Mp3Wizard.tag(this.folder).then(res => {
          this.$store.commit('set_is_loading', false)
          console.log('fertig: ', res)
        })
      }
    }
  }
</script>
