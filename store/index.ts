import { GetterTree, ActionTree, MutationTree } from 'vuex'
import Vue from 'vue'

export const state = () => ({
  zipcode: '',
  primaryVehicle: {
    year: 0,
    make: '',
    model: '',
    trim: '',
  },
  hasSecondVehicle: null as null | boolean,
  secondaryVehicle: {
    year: 0,
    make: '',
    model: '',
    trim: '',
  },
  hasInsurance: null as null | boolean,
  insurance: {
    company: '',
    length: '',
  },
  gender: '',
  isMarried: null as null | boolean,
  isHomeOwner: null as null | boolean,
  bundle: null as null | boolean,
  pastQuestions: {
    atFaultAccident: false as null | boolean,
    twoOrMoreTickets: false as null | boolean,
    duiConviction: false as null | boolean,
  },
  birthdate: '', // Format mm  /  dd  /  yyyy
  name: {
    first: '',
    last: '',
  },
  email: '',
  streetAddress: '',
  phoneNumber: '',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {
  SET_ZIP_CODE: (state, zipcode: string) => (state.zipcode = zipcode),

  SET_PRIMARY_VEHICLE_YEAR: (state, year: number) =>
    (state.primaryVehicle.year = year),
  SET_PRIMARY_VEHICLE_MAKE: (state, make: string) =>
    (state.primaryVehicle.make = make),
  SET_PRIMARY_VEHICLE_MODEL: (state, model: string) =>
    (state.primaryVehicle.model = model),
  SET_PRIMARY_VEHICLE_TRIM: (state, trim: string) =>
    (state.primaryVehicle.trim = trim),

  SET_HAS_SECOND_VEHICLE: (state, hasSecondVehicle: null | boolean) =>
    (state.hasSecondVehicle = hasSecondVehicle),

  SET_SECONDARY_VEHICLE_YEAR: (state, year: number) =>
    (state.secondaryVehicle.year = year),
  SET_SECONDARY_VEHICLE_MAKE: (state, make: string) =>
    (state.secondaryVehicle.make = make),
  SET_SECONDARY_VEHICLE_MODEL: (state, model: string) =>
    (state.secondaryVehicle.model = model),
  SET_SECONDARY_VEHICLE_TRIM: (state, trim: string) =>
    (state.secondaryVehicle.trim = trim),

  SET_HAS_INSURANCE: (state, hasInsurance: boolean) =>
    (state.hasInsurance = hasInsurance),

  SET_INSURANCE_COMPANY: (state, company: string) =>
    (state.insurance.company = company),
  SET_INSURANCE_LENGTH: (state, length: string) =>
    (state.insurance.length = length),

  SET_GENDER: (state, gender: string) => (state.gender = gender),

  SET_MARITAL_STATUS: (state, maritalStatus: null | boolean) =>
    (state.isMarried = maritalStatus),
  SET_HOME_OWNERSHIP_STATUS: (state, isHomeOwner: null | boolean) =>
    (state.isHomeOwner = isHomeOwner),

  SET_BUNDLE: (state, bundle: null | boolean) => (state.bundle = bundle),

  SET_AT_FAULT_ACCIDENT_RESPONSE: (state, atFaultAccident: null | boolean) =>
    (state.pastQuestions.atFaultAccident = atFaultAccident),
  SET_TWO_OR_MORE_TICKETS_RESPONSE: (state, twoOrMoreTickets: null | boolean) =>
    (state.pastQuestions.twoOrMoreTickets = twoOrMoreTickets),
  SET_DUI_CONVICTION_RESPONSE: (state, duiConviction: null | boolean) =>
    (state.pastQuestions.duiConviction = duiConviction),

  SET_BIRTHDATE: (state, birthdate: string) => (state.birthdate = birthdate),

  SET_NAME: (state, name: { first: string; last: string }) =>
    (state.name = name),
  SET_EMAIL: (state, email: string) => (state.email = email),

  SET_STREET_ADDRESS: (state, streetAddress: string) =>
    (state.streetAddress = streetAddress),
  SET_PHONE_NUMBER: (state, phoneNumber: string) =>
    (state.phoneNumber = phoneNumber),
}

export const actions: ActionTree<RootState, RootState> = {
  async getYears(_, vehicle: 'primary' | 'secondary') {
    const length = 40

    return Array.from(
      new Array(length),
      (_x, i) => new Date().getFullYear() - i
    )
  },
  async getMakes(_, vehicle: 'primary' | 'secondary') {
    return {
      primary: [
        'Chevrolet',
        'Dodge',
        'Ford',
        'GMC',
        'Honda',
        'Hyundai',
        'Jeep',
        'Kia',
        'Mercedes-Benz',
        'Nissan',
        'Subaru',
        'Toyota',
      ],
      secondary: [
        'ACURA',
        'ALFA ROMEO',
        'ASTON MARTIN',
        'AUDI',
        'BENTLEY',
        'BMW',
        'BUICK',
        'CADILLAC',
        'CHEVROLET',
        'CHRYSLER',
        'DODGE',
        'FERRARI',
        'FIAT',
        'FORD',
        'GENESIS',
        'HONDA',
        'HYUNDAI',
        'INFINITI',
        'JAGUAR',
        'JEEP',
        'KARMA AUTOMOTIVE LLC',
        'KIA',
        'LAMBORGHINI',
        'LAND ROVER',
        'LEXUS',
        'LINCOLN',
        'LOTUS',
        'MASERATI',
        'MAZDA',
        'MCLAREN AUTOMOTIVE',
        'MERCEDES-BENZ',
        'MINI',
        'MITSUBISHI',
        'NISSAN',
        'PORSCHE',
        'RAM',
        'ROLLS-ROYCE',
        'SUBARU',
        'TESLA',
        'TOYOTA',
        'VOLKSWAGEN',
        'VOLVO',
      ],
    }
  },
  async getModels(_, vehicle: 'primary' | 'secondary') {
    return [
      '370Z',
      'ALTIMA',
      'ARMADA',
      'FRONTIER',
      'GT-R',
      'KICKS',
      'LEAF',
      'MAXIMA',
      'MURANO',
      'NV',
      'NV200',
      'PATHFINDER',
      'ROGUE',
      'ROGUE SPORT',
      'SENTRA',
      'TITAN',
      'TITAN XD',
      'VERSA',
    ]
  },
  async getTrims(_, vehicle: 'primary' | 'secondary') {
    return [
      'S HATCHBACK',
      'S PLUS HATCHBACK',
      'SL PLUS HATCHBACK',
      'SV HATCHBACK',
      'SV PLUS HATCHBACK',
    ]
  },
  async getInsuranceCompanies() {
    return [
      'Allstate',
      'American Family',
      'Farmers Ins',
      'GEICO',
      'Liberty Mutual',
      'Nationwide',
      'Progressive',
      'State Farm',
      'Travelers',
      'USAA',
      'Other',
    ]
  },
  async getInsuranceLengths() {
    return ['Less than a year', '1 to 2 years', '2 to 3 years', '4+ years']
  },
  async getCityState() {
    return ['LA CRESCENTA', 'CA']
  },
  async submit() {},
}
