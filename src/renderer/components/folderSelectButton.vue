<template>
  <v-btn flat @click="chooseFolder" class="orange--text text--darken-2">Open Folder</v-btn>
</template>

<script>
  export default {
    name: 'FolderSelectButton',
    props: ['folder'],
    methods: {
      chooseFolder() {
        const {dialog} = require('electron').remote
        let folder = dialog.showOpenDialog({properties: ['openDirectory']})
        if (folder) this.$emit('update:folder', folder[0])
      }
    }
  }
</script>
