<template>
  <div class="color-wrapper">
    <div
      v-show="subPalette !== undefined"
      @click="subPalette = undefined"
      class="color back-icon"
    >
      <svg fill="#000000" height="54" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </svg>
    </div>

    <div
      v-for="color in colors"
      :key="color.name"
      @click.stop="click(color)"
      class="color"
      :style="{background: color.value}"
      :class="{selected: color.value === value || isTintOfSelected(color), 'is-light': colorIsLight(color.value)}"
      :title="color.name">
    </div>
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
        default: () => materialpalette
      },
      defaultTint: {
        type: [Number, String],
        default: 500
      },
      useSpectrumPicker: {
        type: Boolean,
        default: true
      },
      showExtraColors: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      colorIsLight(color) {
        return colorIsLight(color, 231)
      },
      click(color) {
        if (this.useSpectrumPicker && typeof this.palette[color.name] === 'object') {
          this.subPalette = color.name
          if (this.isTintOfSelected(color)) {
            return
          }
          this.selectedColorName = color.name
        }
        this.$emit('input', color.value)
      },
      isTintOfSelected(color) {
        return this.selectedColorName === color.name && Object.values(this.palette[this.selectedColorName]).includes(this.value)
      }
    },
    computed: {
      colors() {
        const colors = []
        const palette = this.subPalette ? this.palette[this.subPalette] : this.palette
        const subName = this.subPalette ? this.subPalette + ' - ' : ''
        for (let [key, value] of Object.entries(palette)) {
          colors.push({'name': subName + key, 'value': typeof value === 'string' ? value : value[this.defaultTint]})
        }
        return colors
      }
    },
    data() {
      return {
        subPalette: undefined,
        selectedColorName: undefined
      }
    },
    created() {
      console.log('created')
      if (this.value) {
        if (this.value.length === 7 && !this.selectedColorName) {
          for (let [name, valueOrObject] of Object.entries(this.palette)) {
            if (typeof valueOrObject === 'string') {
              if (valueOrObject === this.value) {
                this.selectedColorName = name
                return
              }
            }
            if (typeof valueOrObject === 'object') {
              for (let value of Object.values(valueOrObject)) {
                if (value === this.value) {
                  this.selectedColorName = name
                  return
                }
              }
            }
          }
        }
      }
    }
  }

</script>

<style scoped>
  .color-wrapper {
    width: 350px;
  }

  .color {
    display: inline-block;
    height: 54px;
    width: 54px;
    border-radius: 50%;
    margin: 8px;
  }

  .color.back-icon {
    text-align: center;
    float: left;
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
