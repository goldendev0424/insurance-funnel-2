<template lang="html">
  <div class="w-full mt-6">
    <Title>Homeowner?</Title>
    <BinarySelection
      :value="isHomeOwner"
      left-text="Own"
      right-text="Rent"
      @input="next"
    ></BinarySelection>
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
    isHomeOwner: (state: any) => state.isHomeOwner,
  }),
})
export default class HomeOwnership extends Vue {
  isHomeOwner!: boolean

  @Emit('next')
  next(isHomeOwner: boolean) {
    this.$store.commit('SET_HOME_OWNERSHIP_STATUS', isHomeOwner)
  }
}
</script>
