<template>
  <div>
    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter your pet's name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="text"
          v-model="formData.age"
          required
          placeholder="Enter your pet's age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    showPetForm: Boolean
  },
  data () {
    return {
      formData: {
        name: '',
        age: 0,
        species: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    handleSubmit () {
      const { species, name, age } = this.formData
      const payLoad = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payLoad)

      // resetting the form data
      this.formData = {
        name: '',
        age: 0,
        species: ''
      }
    }
  }
}
</script>
