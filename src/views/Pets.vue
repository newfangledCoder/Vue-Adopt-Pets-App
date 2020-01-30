<template>
  <div>
    <h1>{{ animal.name }}</h1>
    <h2>Breed: {{ animal.breed }}</h2>
    <h3>{{ animal.age }} years old.</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  methods: {
    findPet () {
      const animal = this[this.$route.params.species][this.$route.params.id] // equivalent to this.cats[index] or this.dogs[index]
      return animal
    }
  },
  mounted () {
    this.animal = this.findPet()
  }
}
</script>
