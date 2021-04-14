<template lang="html">
  <ValidationProvider slim="slim" :rules="rules" tag="div">
    <input
      class="p-5 sm:p-3 leading-none tracking-wide text-xl text-blue-700 shadow rounded duration-500 border outline-none hover:border-blue-500 focus:border-blue-500
          bg-gray-200 placeholder-normal focus:bg-white sm:block w-full sm:text-base sm:text-center"
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
