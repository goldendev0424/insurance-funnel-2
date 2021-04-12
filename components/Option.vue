<template lang="html">
  <button
    class="font-bold text-2xl text-white rounded border-b-3 border-blue-600 bg-blue-400 hover:bg-blue-600 duration-300 py-4 px-5 mb-3 mx-1 outline-none"
    v-bind="$props"
    :class="{
      'bg-blue-600': active,
    }"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class PrimaryButton extends Vue {
  @Prop({ default: false }) active!: boolean
}
</script>
