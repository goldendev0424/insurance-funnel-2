<template lang="html">
  <ValidationObserver ref="observer" class="w-full mt-8" tag="div">
    <Title>Enter Zip Code To Begin</Title>
    <div class="flex items-center sm:block">
      <TextInput
        v-model="zipcode"
        class="w-64"
        rules="zipcode"
        placeholder="######"
      ></TextInput>
      <PrimaryButton :right="true" @click="next">CHECK RATES</PrimaryButton>
    </div>
    <ValidationErrorText v-if="errors.length">
      {{ errors[0] }}</ValidationErrorText
    >
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Title from '~/components/Title.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import ValidationErrorText from '~/components/ValidationErrorText.vue'

@Component({
  components: {
    Title,
    TextInput,
    PrimaryButton,
    ValidationErrorText,
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
