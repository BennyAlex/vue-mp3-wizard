<template>
  <div :style="{margin: noMargin ? 0 : '25px' }">
    <v-card class="grey lighten-3 black--text" raised>
      <v-card-title primary-title>
        <div>
          <div class="headline">{{title}}</div>
          <span class="grey--text text--darken-1 font-17">{{subtitle}}</span>
        </div>
      </v-card-title>

      <v-container fluid grid-list-lg>
        <slot name="content"></slot>
      </v-container>

      <v-card-actions style="width: 100%">
        <slot name="action-left"></slot>
        <v-spacer></v-spacer>

        <slot name="action-center"></slot>
        <v-spacer v-if="$slots['action-center']"></v-spacer>

        <slot name="action-right"></slot>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['title', 'subtitle', 'noMargin']
  }
</script>
