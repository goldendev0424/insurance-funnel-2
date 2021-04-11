<template lang="html">
  <ValidationObserver ref="observer" class="w-full mt-6" tag="div">
    <div class="grid grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-5">
      <div class="w-full">
        <Title class="mb-3">First Name</Title>
        <TextInput
          v-model="name.first"
          class="w-64"
          rules="first-name"
        ></TextInput>
      </div>
      <div class="w-full">
        <Title class="mb-3">Last Name</Title>
        <TextInput
          v-model="name.last"
          class="w-64"
          rules="last-name"
        ></TextInput>
      </div>
      <div class="w-full">
        <Title class="mb-3">Email</Title>
        <TextInput v-model="email" class="w-64" rules="email"></TextInput>
      </div>
    </div>
    <PrimaryButton @click="next">CONTINUE</PrimaryButton>
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
export default class NameAndEmail extends Vue {
  $refs!: {
    observer: Vue & {
      validateWithInfo: () => Promise<{ isValid: boolean; errors: string[] }>
    }
  }

  errors: string[] = []

  name = {
    first: '',
    last: '',
  }

  email = ''

  created() {
    this.name.first = this.$store.state.name.first
    this.name.last = this.$store.state.name.last
    this.email = this.$store.state.email
  }

  async next() {
    this.errors = []
    const res = await this.$refs.observer.validateWithInfo()

    if (!res.isValid) {
      this.errors = Object.values(res.errors).flat()
      return
    }

    this.$store.commit('SET_NAME', this.name)
    this.$store.commit('SET_EMAIL', this.email)
    this.$emit('next')
  }
}
</script>
