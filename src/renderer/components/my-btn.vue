<template>
  <v-btn flat round :outline="outline" :style="{color: btncolor}" :disabled="disabled"><slot></slot></v-btn>
</template>

<script>
  export default {
    name: 'my-btn',
    props: {
      outline: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      btncolor() {
        return this.maincolor !== '#ffffff' ? this.maincolor : this.fcolor
      },
      fcolor: {
        get() {
          return this.$store.state.fontColor
        },
        set(value) {
          this.$store.commit('set_font_color', value)
        }
      },
      maincolor: {
        get() {
          return this.$store.state.mainColor
        },
        set(value) {
          this.$store.commit('set_main_color', value)
        }
      }
    }
  }
</script>
