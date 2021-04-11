<template lang="html">
  <button
    class="outline-none px-3 py-5 leading-none font-semibold text-lg rounded-sm border border-transparent transition duration-200 hover:border-indigo-700 sm:text-base sm:px-2 sm:py-4"
    v-bind="$props"
    :class="{
      'text-indigo-700 bg-gray-200': !active,
      'text-white bg-indigo-700': active,
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
