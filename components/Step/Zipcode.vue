<template lang="html">
  <ValidationObserver ref="observer" class="w-full mt-8" tag="div">
    <Title>Enter Zip Code To Begin</Title>
    <div class="block mmd:flex items-start justify-center">
      <TextInput
        v-model="zipcode"
        rules="zipcode"
        :errors="errors"
        maxlength="5"
        placeholder="#####"
      ></TextInput>
      <PrimaryButton :right="true" @click="next" class="ml-0 mmd:ml-8">CHECK RATES</PrimaryButton>
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

import Title from '~/components/Title.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'

@Component({
  components: {
    Title,
    TextInput,
    PrimaryButton,
  },
})
export default class Zipcode extends Vue {
  $refs!: {
    observer: Vue & {
      validateWithInfo: () => Promise<{ isValid: boolean; errors: string[] }>
    }
  }

  errors: string[] = []

  zipcode = ''

  @Watch('zipcode')
  onZipcodeChanged(value: any, oldValue: string) {
    // If zipcode is not a number
    if (isNaN(value)) {
      this.zipcode = oldValue
    }
  }

  created() {
    this.zipcode = this.$store.state.zipcode
  }

  async next() {
    this.errors = []
    const res = await this.$refs.observer.validateWithInfo()

    if (!res.isValid) {
      this.errors = Object.values(res.errors).flat()
      return
    }

    this.$store.commit('SET_ZIP_CODE', this.zipcode)
    this.$emit('next')
  }
}
</script>
