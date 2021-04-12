<template lang="html">
  <div
    class="font-bold text-lg text-red-600 border-l-4 border-red-600 pl-2 sm:text-center sm:text-base sm:border-0 sm:text-white sm:bg-red-600 sm:py-half sm:font-semibold mt-4 sm:mt-3"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ValidationErrorText extends Vue {}
</script>
