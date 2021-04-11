import Vue from 'vue'
import {
  extend,
  setInteractionMode,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

setInteractionMode('passive')

extend('zipcode', {
  validate: (str: string) => {
    return {
      required: true,
      valid: /^[0-9]{5}(?:-[0-9]{4})?$/.test(str),
    }
  },
  computesRequired: true,
  message: 'Please enter a valid zip code',
})

extend('birthdate', {
  // Assumes format mm  /  dd  /  yyyy | m,d,y integer
  validate: (str: string) => {
    if (!/^\d\d\s\s\/\s\s\d\d\s\s\/\s\s\d\d\d\d$/.test(str))
      return { required: true, valid: false }

    const month = parseInt(str.substr(0, 2))
    const day = parseInt(str.substr(7, 9))
    const year = parseInt(str.slice(-4))
    const currentYear = new Date().getUTCFullYear()

    const dayUpperLimit =
      month % 2 === 1
        ? 31
        : month === 2
        ? currentYear % 4 === 0
          ? 29
          : 28
        : 30

    return {
      required: true,
      valid:
        day >= 1 &&
        day <= dayUpperLimit &&
        month >= 1 &&
        month <= 12 &&
        currentYear - year > 18,
    }
  },
  computesRequired: true,
  message: 'Please enter a valid birthdate',
})

extend('first-name', {
  validate: (str: string) => {
    return {
      required: true,
      valid: str.length > 1,
    }
  },
  computesRequired: true,
  message: 'Please enter a valid first name',
})

extend('last-name', {
  validate: (str: string) => {
    return {
      required: true,
      valid: str.length > 1,
    }
  },
  computesRequired: true,
  message: 'Please enter a valid last name',
})

extend('email', {
  validate: (str: string) => {
    return {
      required: true,
      valid: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        str
      ),
    }
  },
  computesRequired: true,
  message: 'Please enter a valid email',
})

extend('street-address', {
  validate: (str: string) => {
    return {
      required: true,
      valid: str.length > 1,
    }
  },
  computesRequired: true,
  message: 'Please enter a valid street address',
})

extend('phone-number', {
  validate: (str: string) => {
    return {
      required: true,
      valid: str.length >= 10,
    }
  },
  computesRequired: true,
  message: 'Please enter a valid phone number',
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
