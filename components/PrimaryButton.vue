<template lang="html">
  <button
    class="p-4 leading-none text-white text-2xl outline-none rounded border-b-3 border-blue-600 bg-blue-400 hover:bg-blue-600 duration-300 w-full mmd:w-auto"
    v-bind="$attrs"
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
