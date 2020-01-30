<template>
  <div class="home">
    <h1>Adopt some best friends</h1>
    <h4> {{ animalsCount }} </h4>
    <h4>Cats Count: {{ getAllCats.length }} </h4>
    <button @click="togglePetForm" class="btn btn-primary">
      Add New Pet
    </button>

    <PetForm
      v-bind:showPetForm="showPetForm"
    />
  </div>
</template>

<script>
import PetForm from '../components/PetForm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    PetForm
  },
  data () {
    return {
      showPetForm: false
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },
  methods: {
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    }
  }
}
</script>
