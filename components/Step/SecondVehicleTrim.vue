<template lang="html">
  <div class="w-full mt-6">
    <Subtitle
      >{{ $store.state.secondaryVehicle.year }}
      {{ $store.state.secondaryVehicle.make }}
      {{ $store.state.secondaryVehicle.model }}</Subtitle
    >
    <Title>Second Vehicle Trim</Title>
    <Option
      v-for="trim in trims"
      :key="trim"
      class="mr-2 mb-2 sm:mr-0 sm:block sm:w-full"
      :active="trim === selectedTrim"
      @click="next(trim)"
      >{{ trim }}</Option
    >
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
    selectedTrim: (state: any) => state.secondaryVehicle.trim,
  }),
})
export default class SecondVehicleTrim extends Vue {
  selectedTrim!: string

  trims: string[] = []

  async created() {
    this.trims = await this.$store.dispatch('getTrims', 'secondary')
  }

  @Emit('next')
  next(trim: string) {
    this.$store.commit('SET_SECONDARY_VEHICLE_TRIM', trim)
  }
}
</script>
