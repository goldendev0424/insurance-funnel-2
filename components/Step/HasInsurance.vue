<template lang="html">
  <div class="w-full mt-6">
    <Title>Have you had auto insurance in the past 30 days?</Title>
    <BinarySelection :value="hasInsurance" @input="next"></BinarySelection>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'

import { mapState } from 'vuex'

import Title from '~/components/Title.vue'
import BinarySelection from '~/components/BinarySelection.vue'

@Component({
  components: {
    Title,
    BinarySelection,
  },
  computed: mapState({
    hasInsurance: (state: any) => state.hasInsurance,
  }),
})
export default class HasInsurance extends Vue {
  hasInsurance!: boolean

  @Emit('next')
  next(hasInsurance: string) {
    this.$store.commit('SET_HAS_INSURANCE', hasInsurance)
  }
}
</script>
