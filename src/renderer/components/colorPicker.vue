<template>
    <div>
        <v-btn primary dark @click.stop="isOpen = true">Choose color</v-btn>
        <v-layout row justify-center>
            <v-dialog v-model="isOpen">
                <card title="Choose a color" :noMargin="true">
                    <div slot="content">
                        <v-layout row wrap style="width: 100%">
                            <v-flex xs4
                                v-for="color in colors"
                                :key="color.value"
                                class="color"
                                :style="{ background: color }"
                            ></v-flex>
                        </v-layout>
                    </div>
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
    data() {
      return {
        colors: [{value: 'orange'}, {value: 'blue'}, {value: 'green'}, {value: 'red'}, {value: 'yellow'}, {value: 'grey'}],
        isOpen: false
      }
    }
  }
</script>

<style scoped>
    .color {
        border: 2px solid black;
        border-radius: 45px;
        height: 50px;
        width: 50px;
        margin: 7px;
    }
</style>
