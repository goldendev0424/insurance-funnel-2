<template lang="html">
  <div class="w-full mt-6">
    <Subtitle
      >{{ $store.state.primaryVehicle.year }}
      {{ $store.state.primaryVehicle.make }}</Subtitle
    >
    <Title>Select Your Vehicle Model</Title>
    <div class="flex flex-wrap justify-between">
      <Option
        v-for="model in models"
        :key="model"
        class="w-5.5/12"
        :active="model === selectedModel"
        @click="next(model)"
        >{{ model }}</Option
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'

import { mapState } from 'vuex'

import Subtitle from '~/components/Subtitle.vue'
import Title from '~/components/Title.vue'
import Option from '~/components/Option.vue'

@Component({
  components: {
    Subtitle,
    Title,
    Option,
  },
  computed: mapState({
    selectedModel: (state: any) => state.primaryVehicle.model,
  }),
})
export default class VehicleModel extends Vue {
  selectedModel!: string

  models: string[] = []

  async created() {
    this.models = await this.$store.dispatch('getModels', 'primary')
  }

  @Emit('next')
  next(model: string) {
    this.$store.commit('SET_PRIMARY_VEHICLE_MODEL', model)
  }
}
</script>
