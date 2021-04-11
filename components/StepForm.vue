<template lang="html">
  <div class="w-full">
    <div class="step-form sm:max-w-none sm:w-full sm:m-0">
      <ProgressBar
        class="mt-8 sm:mt-3"
        :steps="formOrder.length"
        :current="current"
      ></ProgressBar>
      <PreviousQuestion
        v-if="current"
        class="mt-3"
        @click.native="prev"
      ></PreviousQuestion>
      <component
        :is="`Step${formOrder[current][0]}`"
        class="transform transition-all duration-400"
        :class="{
          '-translate-y-20 opacity-0': !inPlace,
          'translate-y-0 opacuty-100': inPlace,
        }"
        @next="next"
        @submit="submit"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ProgressBar from '~/components/ProgressBar.vue'
import PreviousQuestion from '~/components/PreviousQuestion.vue'

import Zipcode from '~/components/Step/Zipcode.vue'
import VehicleYear from '~/components/Step/VehicleYear.vue'
import VehicleMake from '~/components/Step/VehicleMake.vue'
import VehicleModel from '~/components/Step/VehicleModel.vue'
import VehicleTrim from '~/components/Step/VehicleTrim.vue'
import SecondVehicle from '~/components/Step/SecondVehicle.vue'
import SecondVehicleYear from '~/components/Step/SecondVehicleYear.vue'
import SecondVehicleMake from '~/components/Step/SecondVehicleMake.vue'
import SecondVehicleModel from '~/components/Step/SecondVehicleModel.vue'
import SecondVehicleTrim from '~/components/Step/SecondVehicleTrim.vue'
import HasInsurance from '~/components/Step/HasInsurance.vue'
import InsuranceCompany from '~/components/Step/InsuranceCompany.vue'
import InsuranceLength from '~/components/Step/InsuranceLength.vue'
import Gender from '~/components/Step/Gender.vue'
import MaritalStatus from '~/components/Step/MaritalStatus.vue'
import HomeOwnership from '~/components/Step/HomeOwnership.vue'
import Bundle from '~/components/Step/Bundle.vue'
import PastQuestions from '~/components/Step/PastQuestions.vue'
import Birthdate from '~/components/Step/Birthdate.vue'
import NameAndEmail from '~/components/Step/NameAndEmail.vue'
import GetQuotes from '~/components/Step/GetQuotes.vue'

@Component({
  components: {
    ProgressBar,
    PreviousQuestion,
    StepZipcode: Zipcode,
    StepVehicleYear: VehicleYear,
    StepVehicleMake: VehicleMake,
    StepVehicleModel: VehicleModel,
    StepVehicleTrim: VehicleTrim,
    StepSecondVehicle: SecondVehicle,
    StepSecondVehicleYear: SecondVehicleYear,
    StepSecondVehicleMake: SecondVehicleMake,
    StepSecondVehicleModel: SecondVehicleModel,
    StepSecondVehicleTrim: SecondVehicleTrim,
    StepHasInsurance: HasInsurance,
    StepInsuranceCompany: InsuranceCompany,
    StepInsuranceLength: InsuranceLength,
    StepGender: Gender,
    StepMaritalStatus: MaritalStatus,
    StepHomeOwnership: HomeOwnership,
    StepBundle: Bundle,
    StepPastQuestions: PastQuestions,
    StepBirthdate: Birthdate,
    StepNameAndEmail: NameAndEmail,
    StepGetQuotes: GetQuotes,
  },
})
export default class StepForm extends Vue {
  formOrder: [string, (() => boolean)?][] = [
    ['Zipcode'],
    ['VehicleYear'],
    ['VehicleMake'],
    ['VehicleModel'],
    ['VehicleTrim'],
    ['SecondVehicle'],
    ['SecondVehicleYear', () => this.$store.state.hasSecondVehicle],
    ['SecondVehicleMake', () => this.$store.state.hasSecondVehicle],
    ['SecondVehicleModel', () => this.$store.state.hasSecondVehicle],
    ['SecondVehicleTrim', () => this.$store.state.hasSecondVehicle],
    ['HasInsurance'],
    ['InsuranceCompany', () => this.$store.state.hasInsurance],
    ['InsuranceLength', () => this.$store.state.hasInsurance],
    ['Gender'],
    ['MaritalStatus'],
    ['HomeOwnership'],
    ['Bundle'],
    ['PastQuestions'],
    ['Birthdate'],
    ['NameAndEmail'],
    ['GetQuotes'],
  ]

  current = 0

  inPlace = true

  next() {
    if (this.current === this.formOrder.length - 1) return

    let next = this.current + 1

    while (
      next < this.formOrder.length &&
      (this.formOrder[next][1] ? !this.formOrder[next][1]!() : false)
    ) {
      next++
    }

    this.inPlace = false

    setTimeout(() => {
      this.current = next
      setTimeout(() => {
        this.inPlace = true
        this.pushHistory()
      }, 200)
    }, 400)
  }

  prev() {
    if (this.current === 0) return

    let next = this.current - 1

    while (
      next < this.formOrder.length &&
      (this.formOrder[next][1] ? !this.formOrder[next][1]!() : false)
    ) {
      next--
    }

    this.inPlace = false

    setTimeout(() => {
      this.current = next
      setTimeout(() => {
        this.inPlace = true
        this.pushHistory()
      }, 200)
    }, 400)
  }

  async submit() {
    await this.$store.dispatch('submit')
  }

  pushHistory() {
    history.pushState({}, '', null)
  }

  mounted() {
    window.addEventListener('popstate', (e) => {
      this.prev()
    })
  }
}
</script>

<style lang="stylus" scoped>
.step-form
  min-height 500px
  max-width 800px
  width 100%
  margin 0 auto
  padding 0 20px

.duration-400
  transition-duration 0.4s
</style>
