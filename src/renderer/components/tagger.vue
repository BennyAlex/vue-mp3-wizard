<template>
  <card title="Tagger" subtitle="Filename -> Tags">
    <folder-select :folder="folder" slot="content"></folder-select>

    <folder-select-button :folder.sync="folder" slot="action-left"></folder-select-button>

    <v-btn outline round @click.stop="tagButtonClick" class="orange--text text--darken-2" :disabled="!folder"
           slot="action-right">
      Tag
    </v-btn>
  </card>
</template>

<script>
  import Mp3Wizard from '../libs/mp3wizard'
  import FolderSelect from './folderSelect'
  import FolderSelectButton from './folderSelectButton'
  import Card from './card'

  export default {
    components: {
      Card,
      FolderSelectButton,
      FolderSelect
    },
    name: 'tagger',
    data() {
      return {
        folder: null,
        dialogOpen: false
      }
    },
    computed: {},
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
