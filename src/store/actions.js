export default {

  /*
      Just another way of using context :
        addPet: ( { commit }, pet) => {
          commit('appendPet', pet)
        }
     */
  addPet: (context, payLoad) => {
    context.commit('appendPet', payLoad) // causing a mutation called appendPet and passing data to be updated
  }
}
