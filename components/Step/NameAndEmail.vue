<template lang="html">
  <ValidationObserver ref="observer" class="w-full mt-6" tag="div">
    <div>
      <TextInput
        v-model="name.first"
        class="mb-8"
        rules="first-name"
        placeholder="First Name"
        :errors="[errors.firstName]"
      ></TextInput>
      <TextInput
        v-model="name.last"
        class="mb-8"
        rules="last-name"
        placeholder="Last Name"
        :errors="[errors.lastName]"
      ></TextInput>
      <TextInput
        v-model="email"
        class="mb-8"
        rules="email"
        placeholder="Email"
        :errors="[errors.email]"
      ></TextInput>
    </div>
    <PrimaryButton @click="next" class="w-full mb-4">CONTINUE</PrimaryButton>
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
