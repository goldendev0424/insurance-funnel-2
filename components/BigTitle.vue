<template lang="html">
  <div
    class="text-4xl text-gray-900 tracking-wide sm:font-light sm:text-lg sm:text-center mb-8 sm:mb-3"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class BigTitle extends Vue {}
</script>
