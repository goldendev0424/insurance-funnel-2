<template lang="html">
  <div
    class="social-proof w-full border-t border-b border-gray-400 border-dashed flex flex-col items-center py-12"
  >
    <div class="font-bold text-gray-900 mb-6">Providers Include:</div>
    <div class="flex items-center space-x-10">
      <img
        v-for="i in [1, 2, 3, 4]"
        :key="i"
        class="w-32"
        :src="img(`social-proof/${i}.png`)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SocialProof extends Vue {
  img(url: string) {
    return require('../assets/img/' + url)
  }
}
</script>
