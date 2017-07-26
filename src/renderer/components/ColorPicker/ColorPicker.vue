<template>
  <div class="color-wrapper">
    <div
      v-for="color in mainColors"
      :key="color.name"
      @click="click(color)"
      class="color"
      :style="{background: color.value}"
      :class="{selected: color.value === value, 'is-light': colorIsLight(color.value)}"
      :title="color.name"
    ></div>
  </div>
</template>

<script>
  import materialpalette from './material-palette'
  import colorIsLight from './colorIsLight'

  export default {
    name: 'color-picker',
    props: {
      value: {
        type: String,
        required: true
      },
      palette: {
        type: Object,
        default: () => materialpalette,
        required: false
      },
      defaultTint: {
        type: [Number, String],
        default: 500,
        required: false
      },
      disableSpectrumPicker: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    methods: {
      click(color) {
        // this.$emit('input', typeof color === 'string' ? color : color[this.defaultTint])
        this.$emit('input', color.value)
      },
      colorIsLight(color) {
        return colorIsLight(color)
      }
    },
    computed: {
      mainColors() {
        const colors = []
        for (let [key, value] of Object.entries(this.palette)) {
          colors.push({'name': key, 'value': typeof value === 'string' ? value : value[this.defaultTint]})
        }
        return colors
      }
    }
  }

</script>

<style scoped>
  .color-wrapper {
    width: 340px;
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .color {
    display: inline-block;
    height: 54px;
    width: 54px;
    border-radius: 50%;
    margin: 7px;
  }

  .color:before {
    content: '';
    position: absolute;
    width: 54px;
    height: 54px;
    margin: 0;
    border-radius: 50%;
    border: 5px solid rgba(0, 0, 0, 0.15);
    opacity: 0;
    transition: opacity 0.25s;
  }

  .color:after {
    content: '';
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin: 5px;
    border: 3px solid white;
    opacity: 0;
    transition: opacity 0.25s;
  }

  .color.is-light:after {
    border-color: #555555;
  }

  .color.selected:before {
    transition: opacity 0.45s;
    opacity: 1;
  }

  .color.selected:after {
    transition: opacity 0.45s;
    opacity: 1;
  }
</style>
