<template lang="html">
  <div class="w-full mt-6">
    <Title>Add Second Vehicle? (Save Additional 20%)</Title>
    <BinarySelection :value="hasSecondVehicle" @input="next"></BinarySelection>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'

import { mapState } from 'vuex'

import Subtitle from '~/components/Subtitle.vue'
import Title from '~/components/Title.vue'
import BinarySelection from '~/components/BinarySelection.vue'

@Component({
  components: {
    Subtitle,
    Title,
    BinarySelection,
  },
  computed: mapState({
    hasSecondVehicle: (state: any) => state.hasSecondVehicle,
  }),
})
export default class SecondVehicle extends Vue {
  hasSecondVehicle!: boolean

  @Emit('next')
  next(hasSecondVehicle: string) {
    this.$store.commit('SET_HAS_SECOND_VEHICLE', hasSecondVehicle)
  }
}
</script>
