<template>
  <my-btn @click="chooseFolder">Open Folder</my-btn>
</template>

<script>
  import MyBtn from './my-btn'
  export default {
    components: {MyBtn},
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
    }
  }
</script>
