<template>
  <div>
    <div
      v-show="subPalette !== undefined"
      @click="subPalette = undefined"
      class="color icon"
    >
      <v-icon>arrow_back</v-icon>
    </div>
    <div
      v-for="(color, i) in colors"
      :key="color"
      @click="click(color, i)"
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
    useSubPalette: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      subPalette: undefined
    }
  },
  methods: {
    click(color, i) {
      if (this.useSubPalette && this.subPalette === undefined && Object.keys(this.palette[i]).length > 1) {
        this.subPalette = i
        return
      }
      this.$emit('input', color)
    }
  },
  computed: {
    colors() {
      if (this.subPalette !== undefined) {
        return this.palette[this.subPalette]
      }
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

.color.icon {
  line-height: 50px;
  text-align: center;
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
