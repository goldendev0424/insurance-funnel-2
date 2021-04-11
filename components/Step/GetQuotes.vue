<template lang="html">
  <ValidationObserver ref="observer" class="w-full mt-6" tag="div">
    <BigTitle>{{ $store.state.name.first }}, Last Step!</BigTitle>
    <div class="grid grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-5">
      <div class="w-full">
        <Title class="mb-3">Street Address</Title>
        <TextInput
          v-model="streetAddress"
          class="w-64"
          rules="street-address"
        ></TextInput>
        <div
          class="mt-1 font-thin text-indigo-600 text-sm text-center hidden sm:block"
        >
          {{ city }}, {{ state }} {{ $store.state.zipcode }}
        </div>
      </div>
      <div class="w-full">
        <Title class="mb-3">Phone Number</Title>
        <TextInput
          v-model="phoneNumber"
          class="w-64"
          rules="phone-number"
        ></TextInput>
      </div>
    </div>
    <div class="mt-4 font-bold text-indigo-600 text-xl sm:hidden">
      {{ city }}, {{ state }} {{ $store.state.zipcode }}
    </div>
    <PrimaryButton
      class="block w-full"
      :bold="true"
      :disabled="submitted"
      @click="submit"
      >Get My Auto Quotes</PrimaryButton
    >
    <ValidationErrorText v-if="errors.length">
      {{ errors[0] }}</ValidationErrorText
    >
    <div class="mt-16 mb-10 space-y-4 text-xs text-gray-400 sm:mt-12">
      <div>
        <span
          >By clicking "Get My Auto Quotes" I provide my electronic signature
          and express written consent to telemarketing calls, text messages,
          emails, and postal mail from this Web site,
        </span>
        <NuxtLink class="text-blue-300 underline" to="/partners"
          >our marketing and re-marketing network, and up to eight insurance
          companies or their affiliates</NuxtLink
        ><span>
          or representatives at the phone number (including wireless number),
          email address, and postal address provided by me. I consent to calls
          and text messages transmitting insurance quotes, or seeking related
          additional information from me, using an Automatic Telephone Dialing
          System or prerecorded or artificial voices. I consent that my
          signature is not a condition of purchasing any property, goods, or
          services and that I may revoke my consent at any time.</span
        >
      </div>
      <div>
        <span
          >Additionally, by clicking "Get My Auto Quotes," I acknowledge that I
          have read, understand, and agree to this Web site’s
        </span>
        <NuxtLink class="text-blue-300 underline" to="/privacy-policy"
          >Privacy Policy</NuxtLink
        ><span> and </span>
        <NuxtLink class="text-blue-300 underline" to="/terms-of-use"
          >Terms of Use.</NuxtLink
        >
      </div>
      <div>
        I am directing this Web site to share my information to the providers in
        our network for the purpose of providing me with information about their
        financial services and products.
      </div>
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import BigTitle from '~/components/BigTitle.vue'
import Title from '~/components/Title.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import ValidationErrorText from '~/components/ValidationErrorText.vue'

@Component({
  components: {
    BigTitle,
    Title,
    TextInput,
    PrimaryButton,
    ValidationErrorText,
  },
})
export default class GetQuotes extends Vue {
  $refs!: {
    observer: Vue & {
      validateWithInfo: () => Promise<{ isValid: boolean; errors: string[] }>
    }
  }

  errors: string[] = []

  streetAddress = ''
  phoneNumber = ''

  city = ''
  state = ''

  submitted = false

  async created() {
    this.streetAddress = this.$store.state.streetAddress
    this.phoneNumber = this.$store.state.phoneNumber

    const cityState: [string, string] = await this.$store.dispatch(
      'getCityState'
    )
    this.city = cityState[0]
    this.state = cityState[1]
  }

  async submit() {
    this.errors = []
    const res = await this.$refs.observer.validateWithInfo()

    if (!res.isValid) {
      this.errors = Object.values(res.errors).flat()
      return
    }

    this.submitted = true
    this.$store.commit('SET_STREET_ADDRESS', this.streetAddress)
    this.$store.commit('SET_PHONE_NUMBER', this.phoneNumber)
    this.$emit('submit')
  }
}
</script>
