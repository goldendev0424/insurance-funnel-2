<template lang="html">
  <ValidationProvider slim="slim" :rules="rules" tag="div">
    <!-- <input
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
    /> -->
    <input
      class="p-5 sm:p-3 leading-none tracking-wide text-xl text-blue-700 shadow rounded duration-500 border outline-none hover:border-blue-500 focus:border-blue-500
          bg-gray-200 font-bold placeholder-normal focus:bg-white sm:block w-full sm:text-base sm:text-center"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
    
    <ValidationErrorText v-if="errors.length"> {{ errors[0] }} </ValidationErrorText>
  </ValidationProvider>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { mask } from 'vue-the-mask'

import ValidationErrorText from '~/components/ValidationErrorText.vue'

@Component({
  inheritAttrs: false,
  directives: {
    mask,
  },
  components: {
    ValidationErrorText,
  },
})
export default class TextInput extends Vue {
  @Prop({ default: '' }) mask!: string
  @Prop({ default: '' }) rules!: string
  @Prop({ default: [] }) errors!: Array<string>
}
</script>
