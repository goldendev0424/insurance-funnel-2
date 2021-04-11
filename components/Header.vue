<template lang="html">
  <div
    class="flex items-center p-5 border-b border-gray-400 w-full text-gray-600 sm:justify-center sm:border-0 sm:p-3"
  >
    <img class="h-10" src="~assets/img/logo.png" />
    <div class="border-l border-gray-500 pl-4 ml-4 sm:hidden">
      Get fast, cheap car insurance quotes with one simple form.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {}
</script>
