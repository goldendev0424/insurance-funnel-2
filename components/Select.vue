<template lang="html">
  <select
    class="py-2 px-3 leading-none tracking-wide text-xl border rounded-sm bg-gray-200 text-blue-700 border-gray-400 sm:block sm:w-full"
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
