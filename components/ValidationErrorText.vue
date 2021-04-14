<template lang="html">
  <div
    class="text-base mmd:text-lg text-white mmd:text-red-600 border-0 mmd:border-l-4 border-red-600 pl-0 mmd:pl-2 text-center mmd:text-left bg-red-600 mmd:bg-white
          font-semibold mmd:font-bold mt-3 px-2"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ValidationErrorText extends Vue {}
</script>
