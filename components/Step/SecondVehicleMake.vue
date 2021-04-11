<template lang="html">
  <div class="w-full mt-6">
    <Subtitle>{{ $store.state.secondaryVehicle.year }}</Subtitle>
    <Title>Second Vehicle Make</Title>
    <div class="mb-6 sm:grid sm:grid-cols-2 gap-2">
      <Option
        v-for="make in makes"
        :key="make"
        class="mr-2 mb-2 sm:m-0"
        :active="make === selectedMake"
        @click="next(make)"
        >{{ make }}</Option
      >
    </div>
    <Select :options="selectMakes" :value="selectedMake" @input="next"></Select>
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
    selectedMake: (state: any) => state.secondaryVehicle.make,
  }),
})
export default class SecondVehicleMake extends Vue {
  selectedMake!: string

  makes: string[] = []
  selectMakes: string[] = []

  async created() {
    const makes: {
      primary: string[]
      secondary: string[]
    } = await this.$store.dispatch('getMakes', 'secondary')

    this.makes = makes.primary
    this.selectMakes = makes.secondary
  }

  @Emit('next')
  next(make: string) {
    this.$store.commit('SET_SECONDARY_VEHICLE_MAKE', make)
  }
}
</script>
