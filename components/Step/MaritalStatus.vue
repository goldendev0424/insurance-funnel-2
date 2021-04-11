<template lang="html">
  <div class="w-full mt-6">
    <Title>Married?</Title>
    <BinarySelection :value="isMarried" @input="next"></BinarySelection>
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
    isMarried: (state: any) => state.isMarried,
  }),
})
export default class MaritalStatus extends Vue {
  isMarried!: boolean

  @Emit('next')
  next(isMarried: boolean) {
    this.$store.commit('SET_MARITAL_STATUS', isMarried)
  }
}
</script>
