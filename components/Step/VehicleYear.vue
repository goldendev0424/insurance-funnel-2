<template lang="html">
  <div class="w-full mt-6">
    <Title>Select Your Vehicle Year</Title>
    <div class="flex flex-wrap justify-center">
      <Option
        v-for="year in years"
        :key="year"
        class="max-w-25 min-w-25"
        :active="year === selectedYear"
        @click="next(year)"
        >{{ year }}</Option
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'

import { mapState } from 'vuex'

import Title from '~/components/Title.vue'
import Option from '~/components/Option.vue'

@Component({
  components: {
    Title,
    Option,
  },
  computed: mapState({
    selectedYear: (state: any) => state.primaryVehicle.year,
  }),
})
export default class VehicleYear extends Vue {
  selectedYear!: number

  years: number[] = []

  async created() {
    this.years = await this.$store.dispatch('getYears', 'primary')
  }

  @Emit('next')
  next(year: number) {
    this.$store.commit('SET_PRIMARY_VEHICLE_YEAR', year)
  }
}
</script>
