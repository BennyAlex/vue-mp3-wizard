<template>
  <div>
    <v-btn @click.stop="isOpen = true" :style="{background: value || '#222', color: 'white'}">{{label}}</v-btn>

    <my-dialog v-model="isOpen" :title="label">
      <color-picker v-model="_value"></color-picker>
    </my-dialog>

    <!--<v-layout row justify-center>-->
      <!--<v-dialog v-model="isOpen" width="auto" hide-overlay>-->
        <!--<card title="Select a color">-->
          <!--<color-picker v-model="value2"></color-picker>-->
        <!--</card>-->
      <!--</v-dialog>-->
    <!--</v-layout>-->
  </div>
</template>

<script>
  import {ColorPicker} from './ColorPicker';
  import Card from './my-card'
  import MyDialog from './my-dialog'

  export default {
    components: {
      MyDialog,
      Card,
      ColorPicker
    },
    name: 'color-picker-wrapper',
    props: {
      label: {
        type: String,
        required: false,
        default: 'Select a color'
      },
      value: {
        type: String,
        required: true
      }
    },
    computed: {
      _value: {
        get() {
          return this.value
        },
        set(color) {
          this.$emit('input', color)
        }
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
  .color {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 5px;
    float: left;
  }

  .color:after {
    content: '';
    position: absolute;
    width: 39.5px;
    height: 39.5px;
    border-radius: 50%;
    margin: 5px;
    border: 3px solid white;
    opacity: 0;
    transition: opacity .3s;
  }

  .color.selected:after {
    opacity: 1;
  }
</style>
