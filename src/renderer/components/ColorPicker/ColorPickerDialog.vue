<template>
  <span>
    <v-btn @click.stop="isOpen = true" :style="{background: color || '#222', color: 'white'}">{{label}}</v-btn>
    <v-layout row justify-center>
      <v-dialog v-model="isOpen">
        <card title="Choose a color" :noMargin="true">
          <div slot="content">
            <slot></slot>
          </div>
        </card>
      </v-dialog>
    </v-layout>
  </span>
</template>

<script>
  import Card from '../card'

  export default {
    components: {
      Card
    },
    name: 'color-picker-dialog',
    props: {
      label: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        isOpen: false
      }
    }
  }
</script>

<style scoped>
</style>
