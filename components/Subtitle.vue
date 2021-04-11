<template lang="html">
  <div class="font-semibold text-sm text-gray-500 sm:text-center">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Subtitle extends Vue {}
</script>
