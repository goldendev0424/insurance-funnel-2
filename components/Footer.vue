<template lang="html">
  <div
    class="block mmd:flex items-center justify-between p-5 w-full text-gray-600 text-sm mmd:text-base text-center"
  >
    <div class="p-2 mmd:p-0">
      © {{ currentYear }} Placeholder company inc.
    </div>
    <div class="inline-block mmd:flex space-x-3">
      <div
        v-for="(item, i) in menu"
        :key="i"
        class="underline inline-block"
      >
        <NuxtLink :to="menu[i][1]">{{ menu[i][0] }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
  menu = [
    ['Contact Us', '/contact-us'],
    ['Privacy Policy', '/privacy-policy'],
    ['Terms of Use', '/terms-of-use'],
    ['Online Tracking', '/online-tracking'],
  ]

  get currentYear() {
    return new Date().getFullYear()
  }
}
</script>
