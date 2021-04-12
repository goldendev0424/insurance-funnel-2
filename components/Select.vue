<template lang="html">
  <select
    class="w-full p-5 sm:p-3 leading-none text-xl text-blue-700 shadow rounded duration-500 border outline-none hover:border-blue-500 focus:border-blue-500
          bg-gray-200 font-bold focus:bg-white"
    :value="finalValue"
    @input="$emit('input', $event.target.value)"
  >
    <option disabled="disabled" :value="defaultValue">
      {{ defaultValue }}
    </option>
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Select extends Vue {
  @Prop() options!: string[]
  @Prop() value!: string

  defaultValue = 'Other Makes'.toUpperCase()

  get valueInOptions() {
    return this.options.includes(this.value)
  }

  get finalValue() {
    return (this.valueInOptions && this.value) || this.defaultValue
  }

  created() {
    // TODO: this really is the weirdest vue shit ive ever seen
    setTimeout(() => {
      this.$forceUpdate()
    }, 200)
  }
}
</script>
