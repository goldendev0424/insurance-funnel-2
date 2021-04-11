<template lang="html">
  <div class="w-full mt-6">
    <Title>How long have you continuously had auto insurance?</Title>
    <div class="grid grid-cols-2 gap-2">
      <Option
        v-for="insuranceCompany in insuranceLengths"
        :key="insuranceCompany"
        :active="insuranceCompany === selectedInsuranceLength"
        @click="next(insuranceCompany)"
        >{{ insuranceCompany }}</Option
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'

import { mapState } from 'vuex'

import Title from '~/components/Title.vue'
import Option from '~/components/Option.vue'
import Select from '~/components/Select.vue'

@Component({
  components: {
    Title,
    Option,
    Select,
  },
  computed: mapState({
    selectedInsuranceLength: (state: any) => state.insurance.length,
  }),
})
export default class InsuranceCompany extends Vue {
  selectedInsuranceLength!: string

  insuranceLengths: string[] = []

  async created() {
    this.insuranceLengths = await this.$store.dispatch('getInsuranceLengths')
  }

  @Emit('next')
  next(insuranceLengths: string) {
    this.$store.commit('SET_INSURANCE_LENGTH', insuranceLengths)
  }
}
</script>
