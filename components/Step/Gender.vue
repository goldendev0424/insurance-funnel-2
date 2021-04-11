<template lang="html">
  <div class="w-full mt-6">
    <Title>Gender</Title>
    <BinarySelection
      :value="gender"
      left-text="Male"
      left-value="male"
      right-text="Female"
      right-value="female"
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
    gender: (state: any) => state.gender,
  }),
})
export default class Gender extends Vue {
  gender!: string

  @Emit('next')
  next(gender: string) {
    this.$store.commit('SET_GENDER', gender)
  }
}
</script>
