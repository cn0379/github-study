const state = {
  localtion:{}
}

// getters
const getters = {
  
}


// mutations
const mutations = {
  SET_LOCALTION(state,v){
    state.localtion = Object.assign({},v);
  }
}

// actions
const actions = {
  
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
