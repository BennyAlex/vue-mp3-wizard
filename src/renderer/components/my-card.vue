<template>
  <v-card class="grey lighten-3 black--text" raised>
    <v-card-title primary-title>
      <div :class="{center: centerTitle}">
        <div class="headline bold" v-if="title">{{title}}</div>
        <span class="grey--text text--darken-1 font-17" v-if="subtitle">{{subtitle}}</span>
      </div>
    </v-card-title>

    <v-container fluid>
      <slot></slot>
    </v-container>

    <v-card-actions style="width: 100%">
      <slot name="action-left"></slot>
      <v-spacer></v-spacer>

      <slot name="action-center"></slot>
      <v-spacer v-if="$slots['action-center']"></v-spacer>

      <slot name="action-right"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'card',
    props: {
      title: {
        type: String,
        required: false
      },
      subtitle: {
        type: String,
        required: false
      },
      centerTitle: {
        type: Boolean,
        required: false
      }
    }
  }
</script>
