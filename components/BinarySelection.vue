<template lang="html">
  <ValidationProvider
    ref="provider"
    class="flex space-x-4 sm:grid sm:grid-cols-2 gap-2 sm:gap-4 sm:space-x-0 sm:text-base"
    tag="div"
    :rules="rules"
  >
    <Option
      class="w-24 sm:w-full"
      :active="value === leftValue"
      @click="$emit('input', leftValue)"
      >{{ leftText }}</Option
    >
    <Option
      class="w-24 sm:w-full"
      :active="value === rightValue"
      @click="$emit('input', rightValue)"
      >{{ rightText }}</Option
    >
  </ValidationProvider>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'

import Option from '~/components/Option.vue'

@Component({
  components: {
    Option,
  },
})
export default class BinarySelection extends Vue {
  $refs!: {
    provider: Vue & {
      syncValue: (value: any) => void
    }
  }

  @Prop() value!: any

  @Prop() rules!: string

  @Watch('value')
  updateValidationValue() {
    this.$refs.provider.syncValue(this.value)
  }

  mounted() {
    this.updateValidationValue()
  }

  @Prop({ default: 'Yes' }) leftText!: string
  @Prop({ default: true }) leftValue!: any

  @Prop({ default: 'No' }) rightText!: string
  @Prop({ default: false }) rightValue!: any
}
</script>
