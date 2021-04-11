<template lang="html">
  <div class="inline-flex items-center cursor-pointer text-gray-500 sm:hidden">
    <FontAwesomeIcon class="h-3" icon="chevron-left"></FontAwesomeIcon>
    <div class="font-bold text-sm ml-1">Previous Question</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PreviousQuestion extends Vue {}
</script>
