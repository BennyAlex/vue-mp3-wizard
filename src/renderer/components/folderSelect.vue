<template>
  <div class="font-16">
    <b v-if="folder">Chosen folder: {{folder}}</b>
    <b v-else>Select a folder first</b>
  </div>
</template>

<script>
  export default {
    name: 'folderSelect',
    props: ['folder']
  }
</script>
