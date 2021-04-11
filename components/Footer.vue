<template lang="html">
  <div
    class="flex items-center justify-between p-5 w-full text-gray-600 sm:block sm:text-sm sm:text-center"
  >
    <div class="sm:leading-none sm:p-2">
      © {{ currentYear }} Placeholder company inc.
    </div>
    <div class="space-x-3 flex sm:inline-block sm:space-x-0">
      <div
        v-for="(item, i) in menu"
        :key="i"
        class="underline sm:inline-block sm:p-2"
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
