<template lang="html">
  <div
    class="flex items-center border-b border-gray-400 w-full text-gray-600 justify-center mmd:justify-start p-3 mmd:p-5"
  >
    <img class="h-10" src="~assets/img/logo.png" />
    <div class="border-l border-gray-500 pl-4 ml-4 hidden mmd:block">
      Get fast, cheap car insurance quotes with one simple form.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Header extends Vue {}
</script>
