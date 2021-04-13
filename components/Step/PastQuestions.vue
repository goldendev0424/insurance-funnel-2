<template lang="html">
  <ValidationObserver ref="observer" class="w-full mt-6" tag="div">
    <Title>Has anyone on this policy had:</Title>
    <div class="space-y-8">
      <div class="w-full">
        <Title class="mb-3">
          <span class="text-3xl">
            <span>An at-fault accident in the past</span>
            <span class="font-semibold"> three (3) years?</span>
          </span>
        </Title>
        <BinarySelection v-model="atFaultAccident"></BinarySelection>
      </div>
      <div class="w-full">
        <Title class="mb-3">
          <span class="text-3xl">
            <span class="font-semibold">Two (2) or more</span>
            <span> tickets in the past</span>
            <span class="font-semibold"> three (3) years?</span>
          </span>
        </Title>
        <BinarySelection v-model="twoOrMoreTickets"></BinarySelection>
      </div>
      <div class="w-full">
        <Title class="mb-3">
          <span class="text-3xl">
            <span>A DUI conviction in the past</span>
            <span class="font-semibold"> three (3) years?</span>
          </span>
        </Title>
        <BinarySelection v-model="duiConviction"></BinarySelection>
      </div>
    </div>
    <PrimaryButton class="my-6 w-full" @click="next">CONTINUE</PrimaryButton>
    <ValidationErrorText v-if="errors.length" class="mb-8">
      {{ errors[0] }}</ValidationErrorText
    >
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Title from '~/components/Title.vue'
import BinarySelection from '~/components/BinarySelection.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import ValidationErrorText from '~/components/ValidationErrorText.vue'

@Component({
  components: {
    Title,
    BinarySelection,
    PrimaryButton,
    ValidationErrorText,
  },
})
export default class PastQuestions extends Vue {
  $refs!: {
    observer: Vue & {
      validateWithInfo: () => Promise<{ isValid: boolean; errors: string[] }>
    }
  }

  errors: string[] = []

  atFaultAccident: boolean | null = null
  twoOrMoreTickets: boolean | null = null
  duiConviction: boolean | null = null

  created() {
    this.atFaultAccident = this.$store.state.pastQuestions.atFaultAccident
    this.twoOrMoreTickets = this.$store.state.pastQuestions.twoOrMoreTickets
    this.duiConviction = this.$store.state.pastQuestions.duiConviction
  }

  async next() {
    this.errors = []
    const res = await this.$refs.observer.validateWithInfo()

    if (!res.isValid) {
      this.errors = Object.values(res.errors).flat()
      return
    }

    this.$store.commit('SET_AT_FAULT_ACCIDENT_RESPONSE', this.atFaultAccident)
    this.$store.commit(
      'SET_TWO_OR_MORE_TICKETS_RESPONSE',
      this.twoOrMoreTickets
    )
    this.$store.commit('SET_DUI_CONVICTION_RESPONSE', this.duiConviction)
    this.$emit('next')
  }
}
</script>
