<template lang="html">
  <button
    class="px-5 leading-none border-yellow-500 bg-yellow-500 text-gray-900 font-semibold tracking-wide outline-none sm:w-full sm:p-4 sm:mt-6"
    v-bind="$attrs"
    :class="{
      'py-6 text-sm rounded-sm': !bold,
      'py-4 text-md rounded-xl': bold,
      'mt-12': !right,
      'ml-8 sm:ml-0': right,
    }"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class PrimaryButton extends Vue {
  @Prop({ default: false }) bold!: boolean

  @Prop({ default: false }) right!: boolean
}
</script>

<style lang="stylus" scoped>
button
  border-width 1.5px !important
</style>
