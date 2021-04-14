<template lang="html">
  <button
    class="ssm:text-2xl text-xl text-white rounded border-b-3 border-blue-600 bg-blue-400 hover:bg-blue-600 duration-300 py-4 px-3 mb-3 mx-1 outline-none break-all"
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
