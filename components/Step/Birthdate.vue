<template lang="html">
  <ValidationObserver ref="observer" class="w-full mt-6" tag="div">
    <Title>Birthdate</Title>
    <div class="flex flex-col items-center">
      <div class="mb-6">
        <div class="flex p-5 text-xl text-blue-700 font-bold shadow rounded duration-500 border focus:border-blue-500 bg-white">
          <input class="outline-none text-center text-black focus:text-blue-700" size="2" maxLength="2" placeholder="MM"
            v-model="birthdate.month" ref="monthInput" />
          <span class="mx-3">/</span>
          <input class="outline-none text-center text-black focus:text-blue-700" size="2" maxLength="2" placeholder="DD"
            v-model="birthdate.date" ref="dateInput" />
          <span class="mx-3">/</span>
          <input class="outline-none text-center text-black focus:text-blue-700" size="4" maxLength="4" placeholder="YYYY"
            v-model="birthdate.year" ref="yearInput" />
        </div>
        <ValidationErrorText> {{ error }} </ValidationErrorText>
      </div>
      <PrimaryButton @click="next" class="w-1/2">CONTINUE</PrimaryButton>
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

import Title from '~/components/Title.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import ValidationErrorText from '~/components/ValidationErrorText.vue'

@Component({
  components: {
    Title,
    TextInput,
    PrimaryButton,
    ValidationErrorText,
  },
})
export default class Birthdate extends Vue {
  $refs!: {
    dateInput: Vue & {
      focus: () => {}
    }
    yearInput: Vue & {
      focus: () => {}
    }
  }

  error: string = ''
  birthdate = {
    year: '',
    month: '',
    date: '',
  }

  created() {
    let birthdateStr = this.$store.state.birthdate
    let date = birthdateStr.split('/')
    let cleanDate = date.map((item: string) => {
      return item.trim()
    })

    this.birthdate = {
      year: cleanDate[2],
      month: cleanDate[0],
      date: cleanDate[1],
    }
  }

  @Watch('birthdate.year')
  onYearChanged(value: any, oldValue: string) {
    // If year is not a number
    if (isNaN(value)) {
      this.birthdate.year = oldValue
    }
  }

  @Watch('birthdate.month')
  onMonthChanged(value: any, oldValue: string) {
    // If month is not a number
    if (isNaN(value)) {
      this.birthdate.month = oldValue
    }

    if (this.birthdate.month.length < 2) {
      return
    }

    // If month inputed
    // validate month
    if (value < 1) {
      this.birthdate.month = '01'
    }

    if (value > 12) {
      this.birthdate.month = '12'
    }
    this.$refs.dateInput.focus()
  }

  @Watch('birthdate.date')
  onDateChanged(value: any, oldValue: string) {
    // If date is not a number
    if (isNaN(value)) {
      this.birthdate.date = oldValue
    }

    if (this.birthdate.date.length < 2) {
      return
    }

    // If date inputed
    // Validate date
    if (value < 1) {
      this.birthdate.date = '01'
    }

    let month = Number(this.birthdate.month)
    month = month < 1 ? (month = 1) : month

    let dt = new Date(Number(this.birthdate.year), month, 1)

    if (value > 31) {
      this.birthdate.date = this.endOfMonth(dt).toString()
    }

    this.$refs.yearInput.focus()
  }

  // Get end date of month
  endOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  }

  addPrefixDate(d: number) {
    return d < 10 ? `0${d}` : d
  }

  async next() {
    let dt = new Date(
      Number(this.birthdate.year),
      Number(this.birthdate.month) - 1,
      Number(this.birthdate.date)
    )
    this.error = ''

    if (dt.toString().toLowerCase() === 'invalid date') {
      this.error = 'Please enter a valid date'
      return
    }

    let year = dt.getFullYear().toString()
    let month = this.addPrefixDate(dt.getMonth() + 1).toString()
    let date = this.addPrefixDate(dt.getDate()).toString()

    this.birthdate = {
      year,
      month,
      date,
    }

    // Validate age
    if (Number(year) < 1950) {
      this.error = 'Please enter a valid date'
      return
    }

    if (new Date().getFullYear() < Number(year) + 18) {
      this.error = 'Driver must be at least 18 years old'
      return
    }

    // Store birthday and go next step
    let birthdateStr = `${month}/${date}/${year}`
    console.log(birthdateStr)
    this.$store.commit('SET_BIRTHDATE', birthdateStr)
    this.$emit('next')
  }
}
</script>
