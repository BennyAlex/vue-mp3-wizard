<template>
  <div>
    <v-btn @click.stop="isOpen = true">{{label}}</v-btn>

    <v-layout row justify-center>
      <v-dialog v-model="isOpen">
        <card title="Choose a color" :noMargin="true">
          <slot></slot>
        </card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
  import Card from './card'

  export default {
    components: {
      Card
    },
    name: 'color-picker-dialog',
    props: {
      label: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
