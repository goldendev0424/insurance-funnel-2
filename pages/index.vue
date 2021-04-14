<template lang="html">
  <div class="relative">
    <Header></Header>
    <StepForm></StepForm>
    <SocialProof class="hidden mmd:flex"></SocialProof>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Header from '~/components/Header.vue'
import StepForm from '~/components/StepForm.vue'
import SocialProof from '~/components/SocialProof.vue'
import Footer from '~/components/Footer.vue'

@Component({
  components: {
    Header,
    StepForm,
    SocialProof,
    Footer,
  },
})
export default class Funnel extends Vue {}
</script>
