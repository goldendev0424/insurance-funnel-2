<template lang="html">
  <div class="w-full mt-6">
    <Title>Current Auto Insurance</Title>
    <div class="flex flex-wrap justify-between">
      <Option
        v-for="insuranceCompany in insuranceCompanies"
        :key="insuranceCompany"
        class="w-5.5/12"
        :active="insuranceCompany === selectedInsuranceCompany"
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
    selectedInsuranceCompany: (state: any) => state.insurance.company,
  }),
})
export default class InsuranceCompany extends Vue {
  selectedInsuranceCompany!: string

  insuranceCompanies: string[] = []

  async created() {
    this.insuranceCompanies = await this.$store.dispatch(
      'getInsuranceCompanies'
    )
  }

  @Emit('next')
  next(insuranceCompanies: string) {
    this.$store.commit('SET_INSURANCE_COMPANY', insuranceCompanies)
  }
}
</script>
