<template>
  <div>
    <color-picker-dialog :label="label || 'Choose a color'" :color="value2">
      <color-picker v-model="value2" slot></color-picker>
    </color-picker-dialog>
  </div>
</template>

<script>
  import {ColorPicker, ColorPickerDialog} from './ColorPicker';

  export default {
    components: {
      ColorPicker,
      ColorPickerDialog
    },
    name: 'color-picker-wrapper',
    props: {
      label: {
        type: String,
        required: false
      },
      value: {
        type: String,
        required: true
      }
    },
    computed: {
      value2: {
        get() {
          return this.value
        },
        set(color) {
          this.$emit('input', color)
        }
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
