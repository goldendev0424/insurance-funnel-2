<template lang="html">
  <ValidationProvider slim="slim" :rules="rules">
    <input
      v-if="mask"
      v-mask="mask"
      class="p-5 leading-none tracking-wide text-xl border rounded-sm bg-gray-200 text-blue-700 font-semibold border-gray-400 placeholder-gray-500 placeholder-normal placeholder focus:font-normal focus:bg-white sm:block sm:w-full sm:p-3 sm:text-base sm:text-center"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
    <input
      v-else
      class="p-5 leading-none tracking-wide text-xl border rounded-sm bg-gray-200 text-blue-700 font-semibold border-gray-400 placeholder-gray-500 placeholder-normal placeholder focus:font-normal focus:bg-white sm:block sm:w-full sm:p-3 sm:text-base sm:text-center"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
  </ValidationProvider>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import { mask } from 'vue-the-mask'

@Component({
  inheritAttrs: false,
  directives: {
    mask,
  },
})
export default class TextInput extends Vue {
  @Prop({ default: '' }) mask!: string
  @Prop({ default: '' }) rules!: string
}
</script>
