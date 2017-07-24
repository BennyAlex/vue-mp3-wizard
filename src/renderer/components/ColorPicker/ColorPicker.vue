<template>
  <div>
    <div
      v-for="(color, i) in colors"
      :key="color"
      @click="click(color, i)"
      class="color"
      :style="{background: color}"
      :class="{color: true, selected: color === value}"
    ></div>
  </div>
</template>

<script>
import defaultPalette from './defaultPalette'

export default {
  name: 'color-picker-content',
  props: {
    palette: {
      type: Array,
      default: () => defaultPalette
    },
    tints: {
      type: Array
    },
    defaultTint: {
      default: 500
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    click(color, i) {
      this.$emit('input', color)
    }
  },
  computed: {
    colors() {
      return this.palette.map(p => p[this.defaultTint])
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
