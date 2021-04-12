<template lang="html">
  <div class="w-full mt-6">
    <Title
      >Would you like to also receive {{isHomeOwner ? 'home' : 'renters'}} insurance policy quotes? You may be
      able to bundle and save even more on your auto policy.</Title
    >
    <BinarySelection :value="bundle" @input="next"></BinarySelection>
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
    bundle: (state: any) => state.bundle,
  }),
})
export default class Bundle extends Vue {
  isHomeOwner!: boolean
  bundle!: boolean

  @Emit('next')
  next(bundle: boolean) {
    this.$store.commit('SET_BUNDLE', bundle)
  }
}
</script>
