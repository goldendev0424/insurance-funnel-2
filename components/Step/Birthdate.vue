<template lang="html">
  <ValidationObserver ref="observer" class="w-full mt-6" tag="div">
    <Title>Birthdate</Title>
    <div class="flex flex-col items-center">
      <TextInput
        v-model="birthdate"
        class="mb-5"
        mask="##  /  ##  /  ####"
        rules="birthdate"
        :errors="errors"
      ></TextInput>

      <PrimaryButton @click="next" class="w-1/2">CONTINUE</PrimaryButton>
    </div>
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
export default class Birthdate extends Vue {
  $refs!: {
    observer: Vue & {
      validateWithInfo: () => Promise<{ isValid: boolean; errors: string[] }>
    }
  }

  errors: string[] = []

  birthdate = ''

  created() {
    this.birthdate = this.$store.state.birthdate
  }

  async next() {
    this.errors = []
    const res = await this.$refs.observer.validateWithInfo()

    if (!res.isValid) {
      this.errors = Object.values(res.errors).flat()
      return
    }

    this.$store.commit('SET_BIRTHDATE', this.birthdate)
    this.$emit('next')
  }
}
</script>
