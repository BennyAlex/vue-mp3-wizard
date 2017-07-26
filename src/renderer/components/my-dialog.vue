<template>
  <v-layout row justify-center>
    <v-dialog v-model="_value" width="auto">
      <my-card :title="title" :subtitle="subtitle" :centerTitle="centerTitle">
        <slot></slot>
      </my-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import MyCard from './my-card'
  export default {
    components: {MyCard},
    name: 'my-dialog',
    props: {
      value: {
        type: Boolean,
        required: true
      },
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      centerTitle: {
        type: Boolean
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
