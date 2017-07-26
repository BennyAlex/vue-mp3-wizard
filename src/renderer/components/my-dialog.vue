<template>
  <v-layout row justify-center>
    <v-dialog v-model="_value" width="auto">
      <card :title="title" :subtitle="subtitle" :centerTitle="centerTitle">
        <slot></slot>
      </card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import Card from './my-card'
  export default {
    components: {Card},
    name: 'my-dialog',
    props: {
      value: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        required: false
      },
      subtitle: {
        type: String,
        required: false
      },
      centerTitle: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      _value: {
        get() {
          return this.value
        },
        set(bool) {
          this.$emit('input', bool)
        }
      }
    }
  }
</script>
