<template>
  <div>
    <v-btn @click.stop="isOpen = true" :style="{background: color, color: btncolor}">{{label}}</v-btn>

    <v-layout row justify-center>
      <v-dialog v-model="isOpen">
        <card title="Choose a color" :noMargin="true">
          <v-layout row wrap justify-center child-flex-4 style="width: 100%" slot="content">
            <div v-for="c in colors"
                 :key="c.value"
                 class="color"
                 v-if="(c.value !== 'white' && c.value !== 'black') || (c.value === 'white' && whiteAllowed) || (c.value === 'black' && blackAllowed)"
                 :style="{ background: c.value }"
                 @click="colorClicked(c)"
            ><span v-if="c.value === color" style="font-size: 35px; margin-left: 11px"  :style="{color: c.iconColor || '#000'}">&#10004;</span></div>
          </v-layout>
        </card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
  import Card from './card'
  export default {
    components: {Card},
    name: 'colorPicker',
    props: {
      label: {
        type: String,
        required: true
      },
      color: {
        required: true
      },
      whiteAllowed: {
        required: false
      },
      blackAllowed: {
        required: false
      }
    },
    computed: {
      btncolor() {
        const darkcolors = ['black', 'blue', '#666', '#444']
        if (darkcolors.includes(this.color)) return 'white'
        else return 'black'
      }
    },
    data() {
      return {
        colors: [{value: '#fb8c00'}, {value: 'blue', iconColor: '#ddd'},
          {value: 'green'}, {value: 'red'},
          {value: 'yellow'}, {value: 'grey'}, {value: 'black', iconColor: '#ddd'},
          {value: 'white'}, {value: '#666'}, {value: '#444'}],
        isOpen: false
      }
    },
    methods: {
      colorClicked(color) {
        this.$emit('update:color', color.value)
      }
    }
  }
</script>

<style scoped>
  .color {
    border: 2px solid black;
    border-radius: 45px;
    height: 55px;
    width: 55px;
    margin: 8px;
  }
</style>
