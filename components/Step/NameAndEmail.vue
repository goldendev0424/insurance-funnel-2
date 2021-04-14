<template lang="html">
  <ValidationObserver ref="observer" class="w-full mt-6" tag="div">
    <div>
      <div class="flex flex-col">
        <label for="first_name" class="text-xl mb-2">First name <span class="text-red-500">*</span></label>
        <TextInput
          v-model="name.first"
          id="first_name"
          rules="first-name"
          :errors="[errors.firstName]" />
      </div>
      <div class="flex flex-col">
        <label for="last_name" class="text-xl mb-2">Last name <span class="text-red-500">*</span></label>
        <TextInput
          v-model="name.last"
          id="last_name"
          rules="last-name"
          :errors="[errors.lastName]" />
      </div>
      <div class="flex flex-col">
        <label for="last_name" class="text-xl mb-2">Email <span class="text-red-500">*</span></label>
        <TextInput
          v-model="email"
          rules="email"
          :errors="[errors.email]" />
      </div>
    </div>
    <PrimaryButton @click="next" class="mmd:w-full mb-4">CONTINUE</PrimaryButton>
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Title from '~/components/Title.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'

@Component({
  components: {
    Title,
    TextInput,
    PrimaryButton,
  },
})
export default class NameAndEmail extends Vue {
  $refs!: {
    observer: Vue & {
      validateWithInfo: () => Promise<{ isValid: boolean; errors: string[] }>
    }
  }

  errors = {
    firstName: '',
    lastName: '',
    email: '',
  }

  name = {
    first: '',
    last: '',
  }

  email = ''

  created() {
    this.name.first = this.$store.state.name.first
    this.name.last = this.$store.state.name.last
    this.email = this.$store.state.email
  }

  async next() {
    this.errors = {
      firstName: '',
      lastName: '',
      email: '',
    }

    const res = await this.$refs.observer.validateWithInfo()

    if (!res.isValid) {
      let errors = Object.values(res.errors).flat()
      errors.forEach((error) => {
        if (error.includes('first name') && this.errors.firstName === '') {
          this.errors.firstName = error
        }

        if (error.includes('last name') && this.errors.lastName === '') {
          this.errors.lastName = error
        }

        if (error.includes('email') && this.errors.email === '') {
          this.errors.email = error
        }
      })
      return
    }

    this.$store.commit('SET_NAME', this.name)
    this.$store.commit('SET_EMAIL', this.email)
    this.$emit('next')
  }
}
</script>
