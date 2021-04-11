<template lang="html">
  <div class="w-full h-3 rounded-full overflow-hidden bg-gray-300">
    <div
      class="bg-pink-600 h-full rounded-full transition-all duration-300"
      :style="{ width: `${((current + 1) / (steps + 1)) * 100}%` }"
    ></div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ProgressBar extends Vue {
  @Prop() steps!: number
  @Prop() current!: number
}
</script>
