<template lang="html">
  <div class="w-full mt-6">
    <Subtitle>{{ $store.state.primaryVehicle.year }}</Subtitle>
    <Title>Select Your Vehicle Make</Title>
    <div class="mb-6 flex flex-wrap justify-between">
      <Option
        v-for="make in makes"
        :key="make"
        class="w-5.5/12"
        :active="make === selectedMake"
        @click="next(make)"
        >{{ make }}</Option
      >
    </div>
    <div class="px-1 mb-3">
      <Select :options="selectMakes" :value="selectedMake" @input="next"></Select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'

import { mapState } from 'vuex'

import Subtitle from '~/components/Subtitle.vue'
import Title from '~/components/Title.vue'
import Option from '~/components/Option.vue'
import Select from '~/components/Select.vue'

@Component({
  components: {
    Subtitle,
    Title,
    Option,
    Select,
  },
  computed: mapState({
    selectedMake: (state: any) => state.primaryVehicle.make,
  }),
})
export default class VehicleMake extends Vue {
  selectedMake!: string

  makes: string[] = []
  selectMakes: string[] = []

  async created() {
    const makes: {
      primary: string[]
      secondary: string[]
    } = await this.$store.dispatch('getMakes', 'primary')

    this.makes = makes.primary
    this.selectMakes = makes.secondary
  }

  @Emit('next')
  next(make: string) {
    this.$store.commit('SET_PRIMARY_VEHICLE_MAKE', make)
  }
}
</script>
